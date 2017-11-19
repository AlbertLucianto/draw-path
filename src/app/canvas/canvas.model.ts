import { List, Record } from 'immutable';
import { Action } from 'redux';
import { Drawable } from './drawable/drawable.model';

export interface IPosition {
	x: number;
	y: number;
	z?: number;
}

export interface IRotation {
	x: number;
	y: number;
	z?: number;
}

export class Position extends Record({ x: 0, y: 0 }) {
	x: number;
	y: number;

	constructor(params: IPosition) {
		super(params);
	}
}

export class Position3D extends Record({ x: 0, y: 0, z: 0 }) {
	x: number;
	y: number;
	z: number;

	constructor(params: IPosition) {
		super(params);
	}
}

export class Quaternion extends Record({ x: 0, y: 0, z: 0 }) {
	x: number;
	y: number;
	z: number;

	constructor(params: IRotation) {
		super({
			...params,
			z: params.z ? params.z : 0,
		});
	}
}

// export interface IBoard {
// 	topLeft:
// 	scale:
// 	translate:
// 	size:
// }

export type ActionFromEvent = (event: Event, triggeringDrawable: Drawable) => Action;

export interface RegisteredListener {
	name: string;
	handler: ActionFromEvent;
	target: 'anchor'|'path'|'curveHandle'|'group'|'canvas'|string;
}

export class CanvasState extends Record({ root: List<Drawable>([]) }) {
	root: List<Drawable>;
	// board: Map<>;
}
