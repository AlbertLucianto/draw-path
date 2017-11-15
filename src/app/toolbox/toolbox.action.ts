import { Action } from 'redux';
import { ToolboxActionType, ToolName } from './toolbox.constant';

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
