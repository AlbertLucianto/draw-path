import { Drawable } from '../drawable/drawable.model';
import { Path } from '../path/path.model';

export class Anchor extends Drawable {
	children = undefined;
	parent: Path;
	toString = (): string =>
		`${this.idx === 0 ? 'M' : 'l'} ${this.relPosition.x} ${this.relPosition.y}`
}
