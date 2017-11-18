import { Action } from 'redux';
import { ToolBase } from './tool/tool.model';
import { ToolName } from './toolbox.model';

export enum ToolboxActionType {
	SELECT_TOOL = 'TOOLBOX.GENERAL.SELECT_TOOL',
	SET_TOOL_TRAIT = 'TOOLBOX.GENERAL.SET_TOOL_TRAIT',
}

export abstract class CustomAction {
	toObject = (): Object => Object.keys(this).reduce((acc, key) => {
		acc[key] = this[key];
		return acc;
	}, {})
}

export class SelectToolAction extends CustomAction implements Action {
	type = ToolboxActionType.SELECT_TOOL;
	toolName: ToolName;

	constructor(toolName: ToolName) {
		super();
		this.toolName = toolName;
	}
}

export class SetToolTraitAction extends CustomAction implements Action {
	type = ToolboxActionType.SET_TOOL_TRAIT;
	tool: ToolBase;

	constructor(tool: ToolBase) {
		super();
		this.tool = tool;
	}
}
