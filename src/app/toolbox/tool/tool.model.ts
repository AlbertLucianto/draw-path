import { ComponentRef } from '@angular/core';
import { Action } from 'redux';

export type ActionFromEvent = (event: Event, triggeringComponent: ComponentRef<Object>) => Action;

export interface RegisteredListener {
	name: string;
	handler: ActionFromEvent;
	target: 'anchor'|'path'|'curveHandle'|'group'|'canvas'|string;
}

export interface IToolBase {
	listeners: Array<RegisteredListener>;
}
