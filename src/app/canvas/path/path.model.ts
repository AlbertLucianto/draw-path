import { BaseAnchor } from '../anchor/anchor.model';
import { IPosition } from '../canvas.model';
import { DrawableType } from '../drawable/drawable.constant';
import { Drawable } from '../drawable/drawable.model';

export class Path extends Drawable {
	type = DrawableType.Path;
	children: Array<BaseAnchor> = [];

	toString = (): string =>
		this.children.reduce((acc, anchor) => `${acc} ${anchor.toString()}`, '')

	/**
	 * Push an anchor and return NEW Path (old path is not mutated)
	 * @param { IPosition } absPosition - object containing x, y, and optional z
	 */
	addAnchor = (absPosition: IPosition): Path => {
		const init = Object.assign({}, this);
		const newPath = new Path(init);
		newPath.children = [...this.children];
		newPath.children.push(new BaseAnchor({ absPosition, idx: this.children.length }));
		return newPath;
	}
}
