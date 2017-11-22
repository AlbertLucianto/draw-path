import { List } from 'immutable';
import { BaseAnchor } from '../anchor/anchor.model';
import { IPosition, Position } from '../canvas.model';
import { Drawable, DrawableType, IinitDrawable } from '../drawable/drawable.model';

export class Path extends Drawable {
	children: List<BaseAnchor>;
	idx: number;
	isZipped = false;

	constructor(params: IinitDrawable) {
		super({
			...params,
			type: DrawableType.Path,
		});
	}

	setRouteParentPath = (path: List<number>): Path => {
		return new Path({
			...(<IinitDrawable>this.toObject()),
			children: <List<BaseAnchor>>this.children.map(child => child.setRouteParentPath(path.push(this.idx))),
			routeParentPath: path,
		});
	}

	public toPath = (): string =>
		this.children.reduce((acc, anchor) => `${acc} ${anchor.toPath()}`, '').concat(this.isZipped ? 'z' : '')

	/**
	 * Problem with immutable by adding methods which returns its own type
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
			...(<IinitDrawable>this.toObject()),
			children: this.children.push(new BaseAnchor({
				absPosition: <Position>position,
				routeParentPath: this.routeParentPath.push(this.idx),
				idx: this.children.size,
			})),
		});
	}

	public replaceAnchor = (idx: number, newAnchor: BaseAnchor): Path => {
		const children = this.children.set(
			idx, newAnchor.setRouteParentPath(this.routeParentPath.push(idx)),
		);
		return new Path({
			...(<IinitDrawable>this.toObject()),
			children,
		});
	}

	public updateAnchor = (idx: number, newPosition: IPosition): Path => {
		const children = this.children.updateIn([idx], child => child.setPosition(newPosition));
		return new Path({
			...(<IinitDrawable>this.toObject()),
			children,
		});
	}

	public zip = (): Path => {
		return new Path({
			...(<IinitDrawable>this.addAnchor(this.children.get(0).absPosition).toObject()),
			isZipped: true,
		});
	}
}
