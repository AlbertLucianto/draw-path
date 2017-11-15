import { Action } from 'redux';
import { Drawable } from '../../canvas/drawable/drawable.model';

export type ActionFromEvent = (event: Event, triggeringDrawable: Drawable) => Action;

export interface RegisteredListener {
	name: string;
	handler: ActionFromEvent;
	target: 'anchor'|'path'|'curveHandle'|'group'|'canvas'|string;
}

export interface IToolBase {
	listeners: Array<RegisteredListener>;
}
