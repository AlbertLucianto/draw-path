import { List } from 'immutable';
import { BaseAnchor } from '../anchor/anchor.model';
import { Position } from '../canvas.model';
import { DrawableType } from '../drawable/drawable.constant';
import { DrawableWithChildren, IinitDrawable } from '../drawable/drawable.model';

export class Path extends DrawableWithChildren {
	children: List<BaseAnchor>;
	idx: number;

	constructor(params: IinitDrawable) {
		super(params);
		this.set('type', DrawableType.Path);
	}

	toString = (): string =>
		this.children.reduce((acc, anchor) => `${acc} ${anchor.toString()}`, '')

	/**
	 * Push an anchor and return NEW Path (old path is not mutated)
	 * @param { Position } absPosition - object containing x, y, and optional z
	 */
	public addAnchor = (absPosition: Position): Path => {
		const newPath = <Path>this.update(
			'children',
			(children: List<BaseAnchor>): List<BaseAnchor> =>
					children.push(new BaseAnchor({ absPosition, routeParentPath: this.routeParentPath, idx: this.children.size })),
			);
		return newPath;
	}
}
