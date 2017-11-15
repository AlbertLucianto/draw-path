import { IPosition } from '../canvas.model';
import { DrawableType } from './drawable.constant';

export abstract class Drawable {
	parent?: Drawable;
	children?: Array<Drawable>;
	idx: number;
	relPosition: IPosition;
	type: DrawableType;

	constructor(init: {
		relPosition: IPosition,
		parent?: Drawable,
		idx: number,
		[other: string]: any,
	}) {
		this.relPosition = init.relativePosition;
		this.idx = init.idx;
		this.parent = init.parent;
	}

	pathFromRoot = (): Array<number> => {
		if (!this.parent) { return []; }
		return [...this.parent.pathFromRoot(), this.idx];
	}
}
