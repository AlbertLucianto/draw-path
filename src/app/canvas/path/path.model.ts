import { List } from 'immutable';
import { BaseAnchor } from '../anchor/anchor.model';
import { IPosition, Position } from '../canvas.model';
import { Drawable, DrawableType, IinitDrawable } from '../drawable/drawable.model';

export class Path extends Drawable {
	children: List<BaseAnchor>;
	idx: number;

	constructor(params: IinitDrawable) {
		super({
			...params,
			type: DrawableType.Path,
		});
	}

	setRouteParentPath = (path: List<number>): Path => {
		return new Path({
			children: <List<BaseAnchor>>this.children.map(child => child.setRouteParentPath(path.push(this.idx))),
			idx: this.idx,
			routeParentPath: path,
			absPosition: this.absPosition,
		});
	}

	public toPath = (): string =>
		this.children.reduce((acc, anchor) => `${acc} ${anchor.toPath()}`, '')

	/**
	 * * Problem with immutable by adding methods which returns its own type
	 * since Immutable (Record) return type is a <K,V> pairs and cannot hold method
	 * defined in the subclasses
	 *
	 * Push an anchor and return NEW Path (old path is not mutated)
	 * @param { Position } absPosition - object containing x, y, and optional z
	 */
	public addAnchor = (absPosition: Position|IPosition): Path => {
		let position = absPosition;
		if (!(absPosition instanceof Position)) {
			position = new Position(absPosition);
		}
		return new Path({
			idx: this.idx,
			children: this.children.push(new BaseAnchor({
				absPosition: <Position>position,
				routeParentPath: this.routeParentPath.push(this.idx),
				idx: this.children.size,
			})),
			absPosition: this.absPosition,
		});
	}
}
