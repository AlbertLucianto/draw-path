import { DrawableType } from '../drawable/drawable.constant';
import { Drawable } from '../drawable/drawable.model';
import { Path } from '../path/path.model';

export class Group extends Drawable {
	type = DrawableType.Group;
	children: Array<Group|Path> = [];

	addChild = (drawable: Group|Path, idx: number): Group => {
		const newGroup = new Group({ absPosition: this.absPosition, idx: this.idx, parent: this.parent });
		newGroup.children = [...this.children];
		newGroup.children.splice(idx, 0, drawable);
		return newGroup;
	}
}
