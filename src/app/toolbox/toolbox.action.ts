import { Action } from 'redux';
import { ToolName } from './toolbox.model';

export enum ToolboxActionType {
	SELECT_TOOL = 'TOOLBOX.GENERAL.SELECT_TOOL',
	PLACE_ANCHOR = 'TOOLBOX.GENERAL.PLACE_ANCHOR',
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
