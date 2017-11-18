import { List, Record } from 'immutable';
import { Action } from 'redux';
import { Drawable } from '../../canvas/drawable/drawable.model';
import { ToolName } from '../toolbox.model';

export type ActionFromEvent = (event: Event, triggeringDrawable: Drawable) => Action;

export interface RegisteredListener {
	name: string;
	handler: ActionFromEvent;
	target: 'anchor'|'path'|'curveHandle'|'group'|'canvas'|string;
}

export interface IToolBase {
	name: ToolName;
	listeners: List<RegisteredListener>;
}

export class ToolBase extends Record({ listeners: List([]), name: '' }) implements IToolBase {
	name: ToolName;
	listeners: List<RegisteredListener>;

	constructor(initTool: IToolBase) {
		super(initTool);
	}
}
