import { List, Record } from 'immutable';
import { Position } from '../canvas.model';
import { DrawableType } from './drawable.constant';

export interface IinitDrawable {
	idx: number;
	absPosition: Position;
	routeParentPath?: List<number>;
	type?: DrawableType;
	children?: List<Drawable>;
	[other: string]: any;
}

const initDrawableAttribute = {
	routeParentPath: List<number>([]),
	idx: 0,
	absPosition: new Position({ x: 0, y: 0 }),
	type: '',
};

export abstract class Drawable extends Record(initDrawableAttribute) {
	routeParentPath: List<number>;
	idx: number;
	absPosition: Position;
	type: DrawableType;

	constructor(init: IinitDrawable) {
		super({
			...init,
			routeParentPath: init.routeParentPath ? init.routeParentPath.push(init.idx) : List([init.idx]),
		});
	}

	setRouteParentPath: (parentPath: List<number>) => Drawable;
}

// Created new because Record is not able to add/remove an attribute once created
export class DrawableWithChildren extends Record({ ...initDrawableAttribute, children: List<Drawable>([]) }) {
	children: List<Drawable>;
	routeParentPath: List<number>;
	idx: number;
	absPosition: Position;
	type: DrawableType;

	constructor(init: IinitDrawable) {
		super({
			...init,
			routeParentPath: init.routeParentPath ? init.routeParentPath.push(init.idx) : List([init.idx]),
		});
	}

	setRouteParentPath: (parentPath: List<number>) => Drawable;
}
