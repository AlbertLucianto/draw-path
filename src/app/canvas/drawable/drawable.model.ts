import { Record } from 'immutable';
import { Position } from '../canvas.model';
import { DrawableType } from './drawable.constant';

const ImmutableDrawable = Record({
	parent: undefined,
	idx: 0,
	absPosition: new Position({ x: 0, y: 0 }),
	type: '',
});

export abstract class Drawable extends ImmutableDrawable {
	parent?: Drawable;
	idx: number;
	absPosition: Position;
	type: DrawableType;

	constructor(init: {
		absPosition: Position,
		parent?: Drawable,
		idx: number,
		[other: string]: any,
	}) {
		super(init);
	}

	pathFromRoot = (): Array<number> => {
		if (!this.parent) { return []; }
		return [...this.parent.pathFromRoot(), this.get('idx')];
	}
}

export abstract class DrawableWithChildren extends Drawable {
	children: Array<Drawable>;
}
