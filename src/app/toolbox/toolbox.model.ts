export enum ToolName {
	PenTool = 'PENTOOL',
	SelectionTool = 'SELECTIONTOOL',
}

export interface IToolboxState {
	selected: ToolName;
}

export class ToolboxState implements IToolboxState {
	selected: ToolName;

	constructor(selected: ToolName) {
		this.selected = selected;
	}
}
