import { List } from 'immutable';
import { Position } from '../canvas.model';
import { DrawableType } from '../drawable/drawable.constant';
import { DrawableWithChildren } from '../drawable/drawable.model';
import { Path } from '../path/path.model';

export class Group extends DrawableWithChildren {
	type = DrawableType.Group;
	children: List<Group|Path>;

	addChild = (drawable:
		{ type: DrawableType, absPosition: Position }|Path|Group, idx: number): Group => {
		const child = <DrawableWithChildren>drawable;
		if (typeof child !== 'undefined') {
			return <Group>this.get('children').insert(idx, child.set('routeParentPath', this.routeParentPath.push(idx)));
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
