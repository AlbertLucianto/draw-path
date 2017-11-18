import { Injectable } from '@angular/core';
import { FluxStandardAction } from 'flux-standard-action';
import { ToolBase } from './tool/tool.model';
import { ToolName } from './toolbox.model';

export enum ToolboxActionType {
	SELECT_TOOL = 'TOOLBOX.GENERAL.SELECT_TOOL',
	SET_TOOL_TRAIT = 'TOOLBOX.GENERAL.SET_TOOL_TRAIT',
}

export type ISelectToolAction = FluxStandardAction<{
	toolName: ToolName,
}, undefined>;

export type ISetToolTraitAction = FluxStandardAction<{
	tool: ToolBase,
}, undefined>;

export type IToolboxGeneralAction = FluxStandardAction<{ // Need to improve to be more elegant!
	toolName?: ToolName,
	tool?: ToolBase,
}, undefined>;

@Injectable()
export class ToolboxActions {
	selectToolAction = (toolName: ToolName): ISelectToolAction => ({
		type: ToolboxActionType.SELECT_TOOL,
		payload: { toolName },
		meta: undefined,
	})

	setToolTraitAction = (tool: ToolBase): ISetToolTraitAction => ({
		type: ToolboxActionType.SET_TOOL_TRAIT,
		payload: { tool },
		meta: undefined,
	})
}
