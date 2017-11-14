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
}
