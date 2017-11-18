import { List } from 'immutable';
import { BaseAnchor } from '../anchor/anchor.model';
import { Position } from '../canvas.model';
import { DrawableType } from '../drawable/drawable.constant';
import { DrawableWithChildren, IinitDrawable } from '../drawable/drawable.model';

export class Path extends DrawableWithChildren {
	children: List<BaseAnchor>;
	idx: number;

	constructor(params: IinitDrawable) {
		super({
			...params,
			type: DrawableType.Path,
		});
	}

	public toPath = (): string =>
		this.children.reduce((acc, anchor) => `${acc} ${anchor.toPath()}`, '')

	// public update(key: string, )

	/**
	 * * Problem with immutable by adding methods which returns its own type
	 * since Immutable (Record) return type is a <K,V> pairs and cannot hold method
	 * defined in the subclasses
	 *
	 * Push an anchor and return NEW Path (old path is not mutated)
	 * @param { Position } absPosition - object containing x, y, and optional z
	 */
	public addAnchor = (absPosition: Position): Path => {
		return new Path({
			idx: this.idx,
			children: this.children.push(new BaseAnchor({ absPosition, routeParentPath: this.routeParentPath, idx: this.children.size })),
			absPosition: this.absPosition,
		});
	}
}
