import { BaseAnchor } from '../anchor/anchor.model';
import { Position } from '../canvas.model';
import { DrawableType } from '../drawable/drawable.constant';
import { DrawableWithChildren } from '../drawable/drawable.model';

export class Path extends DrawableWithChildren {
	type = DrawableType.Path;
	children: Array<BaseAnchor> = [];

	toString = (): string =>
		this.children.reduce((acc, anchor) => `${acc} ${anchor.toString()}`, '')

	/**
	 * Push an anchor and return NEW Path (old path is not mutated)
	 * @param { IPosition } absPosition - object containing x, y, and optional z
	 */
	addAnchor = (absPosition: Position): Path => {
		return <Path>this.set(
			'children',
			this.get('children')
					.push(new BaseAnchor(new BaseAnchor({ absPosition, parent: this, idx: this.children.length }))));
	}
}
