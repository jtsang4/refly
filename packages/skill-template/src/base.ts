import { Runnable } from '@langchain/core/runnables';
import { ToolParams } from '@langchain/core/tools';
import { SkillEngine } from './engine';
import { StructuredTool } from '@langchain/core/tools';
import { StateGraphArgs } from '@langchain/langgraph';
import { RunnableConfig } from '@langchain/core/runnables';
import { CallbackManagerForToolRun } from '@langchain/core/callbacks/manager';
import { SkillContext, SkillInput } from '@refly/openapi-schema';
import { EventEmitter } from 'node:stream';
import { SkillEvent } from '@refly/common-types';

export abstract class BaseSkill extends StructuredTool {
  config?: SkillRunnableConfig;

  abstract displayName: Record<string, string>;
  abstract graphState: StateGraphArgs<BaseSkillState>['channels'];

  constructor(protected engine: SkillEngine, params?: BaseToolParams) {
    super(params);
  }

  abstract toRunnable(): Runnable;

  emitEvent(event: keyof SkillEventMap, content?: string, options?: Partial<SkillEvent>) {
    const { locale = 'en', emitter } = this.config?.configurable || {};
    if (emitter) {
      emitter.emit(event, {
        event,
        skillName: this.name,
        skillDisplayName: this.displayName[locale],
        content,
        ...options,
      });
    }
  }

  async _call(
    input: typeof this.graphState,
    runManager?: CallbackManagerForToolRun,
    config?: SkillRunnableConfig,
  ): Promise<string> {
    this.config = config;
    const runnable = this.toRunnable();

    this.emitEvent('start');

    const { locale = 'en' } = config.configurable ?? {};

    const metadata: SkillRunnableMeta = {
      ...config.metadata,
      skillName: this.name,
      skillDisplayName: this.displayName[locale],
    };
    const response = await runnable.invoke(input, { ...config, metadata });

    this.emitEvent('end');

    return response;
  }
}

export interface BaseToolParams extends ToolParams {
  engine: SkillEngine;
}

export interface BaseSkillState extends SkillInput {}

export const baseStateGraphArgs = {
  query: {
    reducer: (left: string, right: string) => (right ? right : left || ''),
    default: () => '',
  },
  locale: {
    reducer: (left?: string, right?: string) => (right ? right : left || 'en'),
    default: () => 'en',
  },
};

export interface SkillEventMap {
  start: [data: SkillEvent];
  end: [data: SkillEvent];
  log: [data: SkillEvent];
  structured_data: [data: SkillEvent];
}

export interface SkillRunnableMeta {
  skillName?: string;
  skillDisplayName?: string;
  [key: string]: unknown;
}

export interface SkillRunnableConfig extends RunnableConfig {
  configurable?: SkillContext & {
    uid: string;
    selectedSkill?: string;
    chatHistory?: string[];
    installedSkills?: string[];
    emitter: EventEmitter<SkillEventMap>;
  };
  metadata?: SkillRunnableMeta;
}
