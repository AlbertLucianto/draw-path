import { IPosition } from '../canvas.model';
import { DrawableType } from './drawable.constant';

export abstract class Drawable {
	parent?: Drawable;
	idx: number;
	absPosition: IPosition;
	type: DrawableType;

	constructor(init: {
		absPosition: IPosition,
		parent?: Drawable,
		idx: number,
		[other: string]: any,
	}) {
		this.absPosition = init.absPosition;
		this.idx = init.idx;
		this.parent = init.parent;
	}

	pathFromRoot = (): Array<number> => {
		if (!this.parent) { return []; }
		return [...this.parent.pathFromRoot(), this.idx];
	}
}
