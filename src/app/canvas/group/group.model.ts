import { List } from 'immutable';
import { Position } from '../canvas.model';
import { DrawableType } from '../drawable/drawable.constant';
import { DrawableWithChildren } from '../drawable/drawable.model';
import { Path } from '../path/path.model';

export class Group extends DrawableWithChildren {
	type = DrawableType.Group;
	children: List<Group|Path>;

	/**
	 * * Problem with immutable by adding methods which returns its own type
	 * since Immutable (Record) return type is a <K,V> pairs and cannot hold method
	 * defined in the subclasses
	 *
	 * Push an anchor and return NEW Path (old path is not mutated)
	 * @param {{type: DrawableType, absPosition: Position }|Path|Group} drawable - drawable parameters
	 * @param {number} idx - inserted on index
	 */
	addChild = (drawable:
		{ type: DrawableType, absPosition: Position }|Path|Group, idx: number): Group => {
		const child = <DrawableWithChildren>drawable;
		if (typeof child !== 'undefined') {
			return new Group({
				children: this.children.push(child.set('routeParentPath', this.routeParentPath.push(idx))),
				idx: idx,
				absPosition: this.absPosition,
			});
		}
		return <Group>this.update(
			'children',
			(children: List<Group|Path>): List<Group|Path> => {
				const init = {
					absPosition: drawable.absPosition,
					routeParentPath: this.routeParentPath,
					idx,
				};
				switch (drawable.type) {
					case DrawableType.Group:
						return children.insert(idx, new Group(init));
					case DrawableType.Path:
						return children.insert(idx, new Path(init));
					default:
						console.error('Invalid child inserted');
						return children;
				}
			},
		);
	}
}
