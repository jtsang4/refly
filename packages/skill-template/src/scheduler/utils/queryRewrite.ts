// deprecated
import { GraphState, IContext, MentionedContextItem, QueryAnalysis } from '../types';
import { summarizeChatHistory, summarizeContext } from './summarizer';
import { z } from 'zod';
import { BaseSkill, SkillRunnableConfig } from '../../base';
import { SkillTemplateConfig } from '@refly-packages/openapi-schema';
import { ModelContextLimitMap } from './token';
import { MAX_CONTEXT_RATIO, MAX_QUERY_TOKENS_RATIO } from './constants';
import { truncateTextWithToken } from './truncator';
import { safeStringifyJSON } from '@refly-packages/utils';
import { extractStructuredData } from './extractor';

// simplify context entityId for better extraction
export const preprocessContext = (context: IContext): IContext => {
  const { resources = [], documents = [], contentList = [] } = context;

  const preprocessedContext = {
    resources: resources.map((r, index) => ({ ...r, resource: { ...r.resource, resourceId: `resource-${index}` } })),
    documents: documents.map((c, index) => ({ ...c, document: { ...c.document, docId: `document-${index}` } })),
    contentList: contentList.map((c, index) => ({ ...c, metadata: { ...c.metadata, entityId: `content-${index}` } })),
  };

  return preprocessedContext;
};

export const postprocessContext = (
  mentionedContextList: MentionedContextItem[],
  originalContext: IContext,
): IContext => {
  let context: IContext = {
    resources: [],
    documents: [],
    contentList: [],
    projects: [],
  };

  mentionedContextList.forEach((item) => {
    if (item.type === 'document') {
      // 这里需要根据entityId在originalContext中找到对应的document
      const originalDocument = originalContext.documents.find((c, index) => `document-${index}` === item.entityId);
      if (originalDocument) {
        context.documents.push({
          ...originalDocument,
          metadata: { ...originalDocument.metadata, useWholeContent: item?.useWholeContent },
        });
      }
    } else if (item.type === 'resource') {
      // 这里需要根据entityId在originalContext中找到对应的resource
      const originalResource = originalContext.resources.find((r, index) => `resource-${index}` === item.entityId);
      if (originalResource) {
        context.resources.push({
          ...originalResource,
          metadata: { ...originalResource.metadata, useWholeContent: item?.useWholeContent },
        });
      }
    } else if (item.type === 'selectedContent') {
      // 这里需要根据entityId在originalContext中找到对应的selectedContent
      const originalSelectedContent = originalContext.contentList.find(
        (c, index) => `content-${index}` === item.entityId,
      );
      if (originalSelectedContent) {
        context.contentList.push({
          ...originalSelectedContent,
          metadata: { ...originalSelectedContent.metadata, useWholeContent: item?.useWholeContent },
        });
      }
    }
  });

  return context;
};

export const buildAnalyzeQuerySystemPromptExamples = () => {
  return `
Examples of query rewriting with context and chat history:

1. Chat History Dependent Query:
   <ChatHistory>
   <ChatHistoryItem type={human}>What are the key features of the new product?</ChatHistoryItem>
   <ChatHistoryItem type={ai}>The key features include AI-powered search, real-time collaboration, and document management.</ChatHistoryItem>
   <ChatHistoryItem type={human}>Can you elaborate on that first point?</ChatHistoryItem>
   </ChatHistory>

   Original query: "How does it compare to competitors?"
   Rewritten query: "How does the AI-powered search feature compare to competitors?"
   mentionedContext: []
   Reasoning: Query references the AI search feature discussed in chat history. Rewritten to clarify the subject while maintaining the comparative intent.

2. Independent Query with Context:
   <Context>
   <ContextItem type='document' entityId='doc-1' title='Project Roadmap'>Q4 goals include improving search accuracy and adding new integrations.</ContextItem>
   </Context>

   <ChatHistory>
   <ChatHistoryItem type={human}>What's our current team size?</ChatHistoryItem>
   <ChatHistoryItem type={ai}>We currently have 25 team members.</ChatHistoryItem>
   </ChatHistory>

   Original query: "What are the integration plans?"
   Rewritten query: "What are the integration plans mentioned in the Project Roadmap?"
   mentionedContext: [
     {
       "type": "document",
       "entityId": "doc-1",
       "title": "Project Roadmap",
       "useWholeContent": true
     }
   ]
   Reasoning: Query relates to context but not chat history. Added document reference while keeping original intent.

3. Self-Contained Query:
   <Context>
   <ContextItem type='selectedContent' entityId='content-1' title='Meeting Notes'>Team discussed API improvements.</ContextItem>
   </Context>

   <ChatHistory>
   <ChatHistoryItem type={human}>How's the project going?</ChatHistoryItem>
   <ChatHistoryItem type={ai}>Progress is on track with minor delays in testing.</ChatHistoryItem>
   </ChatHistory>

   Original query: "What's the weather like in Paris?"
   Rewritten query: "What's the weather like in Paris?"
   mentionedContext: []
   Reasoning: Query is clear and unrelated to both context and chat history. No rewrite needed.

4. Chat History Reference with Context:
   <Context>
   <ContextItem type='resource' entityId='resource-1' title='Performance Report'>System response time improved by 40%.</ContextItem>
   </Context>

   <ChatHistory>
   <ChatHistoryItem type={human}>What optimization methods did we use?</ChatHistoryItem>
   <ChatHistoryItem type={ai}>We implemented caching and database indexing.</ChatHistoryItem>
   <ChatHistoryItem type={human}>And what was the impact?</ChatHistoryItem>
   </ChatHistory>

   Original query: "Could you explain these improvements in detail?"
   Rewritten query: "Could you explain the system response time improvements and optimization methods (caching and database indexing) in detail?"
   mentionedContext: [
     {
       "type": "resource",
       "entityId": "resource-1",
       "title": "Performance Report",
       "useWholeContent": true
     }
   ]
   Reasoning: Query references both chat history (optimization methods) and context (performance improvements). Combined both in rewrite for clarity.

5. Ambiguous Reference Resolution:
   <Context>
   <ContextItem type='selectedContent' entityId='content-2' title='Security Guidelines'>New authentication protocol requires 2FA for all users.</ContextItem>
   </Context>

   <ChatHistory>
   <ChatHistoryItem type={human}>When will this be implemented?</ChatHistoryItem>
   <ChatHistoryItem type={ai}>The rollout is scheduled for next month.</ChatHistoryItem>
   </ChatHistory>

   Original query: "What about existing users?"
   Rewritten query: "What about existing users regarding the new 2FA authentication protocol?"
   mentionedContext: [
     {
       "type": "selectedContent",
       "entityId": "content-2",
       "title": "Security Guidelines",
       "useWholeContent": true
     }
   ]
   Reasoning: Query continues the conversation about authentication. Combined context and chat history to clarify the subject.
   `;
};

// Add schema for query analysis
const queryAnalysisSchema = z.object({
  rewrittenQuery: z.string().describe('The query after entity clarification, keeping original intent intact'),
  mentionedContext: z
    .array(
      z.object({
        type: z.enum(['document', 'resource', 'selectedContent']),
        entityId: z.string().optional(),
        title: z.string(),
        useWholeContent: z.boolean(),
      }),
    )
    .describe('Array of referenced context items'),
  intent: z.enum(['SEARCH_QA', 'WRITING', 'READING_COMPREHENSION', 'OTHER']).describe("The query's primary purpose"),
  confidence: z.number().min(0).max(1).describe('Confidence score for the analysis'),
  reasoning: z.string().describe('Explanation of why the query was kept or modified'),
});

export async function analyzeQueryAndContext(
  query: string,
  ctx: { config: SkillRunnableConfig; ctxThis: BaseSkill; state: GraphState; tplConfig: SkillTemplateConfig },
): Promise<QueryAnalysis> {
  // set current step
  ctx.config.metadata.step = { name: 'analyzeContext' };

  const { chatHistory, resources, documents, contentList, projects, modelName } = ctx.config.configurable;
  const context: IContext = {
    resources,
    documents,
    contentList,
    projects,
  };

  // Preprocess context for better extract mentioned context
  const preprocessedContext = preprocessContext(context);
  const maxContextTokens = ModelContextLimitMap[modelName] * MAX_CONTEXT_RATIO;
  const summarizedContext = summarizeContext(preprocessedContext, maxContextTokens);

  // Summarize chat history
  const summarizedChatHistory = summarizeChatHistory(chatHistory || []);

  const systemPrompt = `You are an AI query analyzer that preserves the original query intent while only clarifying referenced entities when necessary.

## Core Principles
1. HIGHEST PRIORITY: Original Query Intent
   - NEVER modify the query's fundamental purpose or action
   - Keep original verbs and commands intact
   - Maintain user's original expression style
   - If query is clear, DO NOT rewrite at all

2. Context & Chat History Usage
   - Context Format: XML tags for different content types
     <ContextItem type='document|resource|selectedContent' entityId='...' title='...'>content</ContextItem>
   
   - Chat History Format: XML tags for conversation flow
     <ChatHistory>
       <ChatHistoryItem type={human}>user message</ChatHistoryItem>
       <ChatHistoryItem type={ai}>assistant response</ChatHistoryItem>
     </ChatHistory>

   - When to Use Chat History:
     * ONLY when query directly references previous conversation
     * ONLY when query contains ambiguous references like "as mentioned before", "like you said"
     * IGNORE chat history if query is self-contained or unrelated

3. When to Rewrite
   - Query contains ambiguous references ("this/it/that") to context or chat history
   - Query implicitly refers to selected content
   - Query needs entity specification
   - Query references previous conversation without clear context

4. When NOT to Rewrite
   - Query is already specific and clear
   - Context and chat history are unrelated to query
   - Query explicitly states its target

${buildAnalyzeQuerySystemPromptExamples()}`;

  const userMessage = `## User Query
${query}

## Available Context:
${summarizedContext}

## Recent Chat History:
${summarizedChatHistory}

Please analyze the query, focusing primarily on the current query and available context. Only consider the chat history if it's directly relevant to understanding the current query.`;

  const model = ctx.ctxThis.engine.chatModel({ temperature: 0.3 });

  try {
    const result = await extractStructuredData(
      model,
      queryAnalysisSchema,
      systemPrompt + '\n\n' + userMessage,
      ctx.config,
      3, // maxRetries
    );

    ctx.ctxThis.engine.logger.log(`- Rewritten Query: ${result.rewrittenQuery}
    - Mentioned Context: ${safeStringifyJSON(result.mentionedContext)}
    - Intent: ${result.intent} (confidence: ${result.confidence})
    - Reasoning: ${result.reasoning}
    `);

    return {
      optimizedQuery: result?.rewrittenQuery || query,
      mentionedContext: postprocessContext(result?.mentionedContext, context),
      intent: result?.intent,
      confidence: result?.confidence,
      reasoning: result?.reasoning,
    };
  } catch (error) {
    ctx.ctxThis.engine.logger.error(`Failed to analyze query: ${error}`);
    // Return original query if analysis fails
    return {
      optimizedQuery: query,
      mentionedContext: { resources: [], documents: [], contentList: [], projects: [] },
      intent: 'OTHER',
      confidence: 0,
      reasoning: 'Analysis failed, using original query',
    };
  }
}

export const preprocessQuery = (
  query: string,
  ctx: { config: SkillRunnableConfig; ctxThis: BaseSkill; state: GraphState; tplConfig: SkillTemplateConfig },
) => {
  const { modelName } = ctx.config.configurable;
  const maxQueryTokens = (ModelContextLimitMap[modelName] || 128 * 1024) * MAX_QUERY_TOKENS_RATIO;

  return truncateTextWithToken(query, maxQueryTokens);
};
