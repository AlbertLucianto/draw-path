import { Record } from 'immutable';
import { IToolBase, ToolBase } from './tool/tool.model';

export enum ToolName {
	PenTool = 'PENTOOL',
	SelectionTool = 'SELECTIONTOOL',
}

export class ToolboxState extends Record({ selected: {} }) {
	selected: ToolBase;

	constructor(initState: {
		selected: IToolBase,
	}) {
		super(initState);
	}
}
