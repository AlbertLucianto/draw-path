import { Action } from 'redux';
import { ToolboxActionType, ToolName } from './toolbox.constant';

export interface IToolboxState {
	selected: ToolName;
}

export class ToolboxState implements IToolboxState {
	selected: ToolName;
	constructor(selected: ToolName) {
		this.selected = selected;
	}
}

export namespace ActionCreator {
	export class SelectToolAction implements Action {
		type = ToolboxActionType.SELECT_TOOL;
		toolName: ToolName;
		constructor(toolName: ToolName) {
			this.toolName = toolName;
		}
	}
}
