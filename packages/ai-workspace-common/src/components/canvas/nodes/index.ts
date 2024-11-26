import { NodeTypes } from '@xyflow/react';
import { v4 as UUIDV4 } from 'uuid';
import { CanvasNodeType } from '@refly/openapi-schema';
import { DocumentNode } from './document';
import { ResourceNode } from './resource';
import { SkillNode } from './skill';
import { ToolNode } from './tool';
import { SkillResponseNode } from './skill-response';
import { ToolResponseNode } from './tool-response';
import {
  NodeMetadataMap,
  CanvasNodeData,
  DocumentNodeMeta,
  ResourceNodeMeta,
  SkillNodeMeta,
  ToolNodeMeta,
  ResponseNodeMeta,
} from './types';

// Export all components and types
export * from './types';
export * from './document';
export * from './resource';
export * from './skill';
export * from './tool';
export * from './skill-response';
export * from './tool-response';
// Node types mapping
export const nodeTypes: NodeTypes = {
  document: DocumentNode,
  resource: ResourceNode,
  skill: SkillNode,
  tool: ToolNode,
  skillResponse: SkillResponseNode,
  toolResponse: ToolResponseNode,
};

// Helper function to prepare node data
export const prepareNodeData = <T extends CanvasNodeType>({
  type,
  data,
  position = { x: 0, y: 0 },
  connectable = true,
  selected = false,
}: {
  type: T;
  data: CanvasNodeData<NodeMetadataMap[T]>;
  position?: { x: number; y: number };
  connectable?: boolean;
  selected?: boolean;
}) => {
  return {
    id: `node-${UUIDV4()}`,
    type,
    position,
    data,
    connectable,
    selected,
  };
};

// Helper function to get default metadata based on node type
export const getNodeDefaultMetadata = (nodeType: CanvasNodeType) => {
  if (!nodeType) {
    return {};
  }

  switch (nodeType) {
    case 'document':
      return {
        contentPreview: 'Loading document content...',
        // Add optional fields with default values
        title: '',
        lastModified: new Date().toISOString(),
      } as DocumentNodeMeta;

    case 'resource':
      return {
        resourceType: 'weblink', // Default to weblink
        url: '',
        description: '',
        lastAccessed: new Date().toISOString(),
        contentPreview: 'Loading resource content...',
      } as ResourceNodeMeta;

    case 'skill':
      return {
        query: '',
        skillType: 'prompt',
        model: 'gpt-4',
        parameters: {}, // Additional parameters if needed
        lastExecuted: null,
      } as SkillNodeMeta;

    case 'tool':
      return {
        toolType: 'TextToSpeech',
        configuration: {}, // Tool-specific configuration
        status: 'ready',
        lastUsed: null,
      } as ToolNodeMeta;

    case 'skillResponse':
      return {
        modelName: 'Skill Response',
        timestamp: new Date().toISOString(),
        status: 'pending',
        executionTime: null,
      } as ResponseNodeMeta;

    case 'toolResponse':
      return {
        modelName: 'Tool Response',
        timestamp: new Date().toISOString(),
        status: 'pending',
        executionTime: null,
      } as ResponseNodeMeta;

    default:
      return {};
  }
};

// Add this helper function to share common styles
export const getNodeCommonStyles = ({ selected, isHovered }: { selected: boolean; isHovered: boolean }) => `
  bg-white 
  rounded-xl
  box-border
  p-3
  transition-all
  duration-200
  border-[2px]
  border-solid
  ${selected ? 'border-[#00968F]' : 'border-transparent'}
  ${
    isHovered
      ? 'shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)]'
      : 'shadow-[0px_1px_2px_0px_rgba(16,24,60,0.05)]'
  }
  hover:shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)]
`;
