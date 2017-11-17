import { DrawableType } from '../drawable/drawable.constant';
import { Drawable } from '../drawable/drawable.model';
import { Path } from '../path/path.model';

export enum AnchorType {
	MoveTo = 'M',
	LineTo = 'L',
	HorizontalLineTo = 'H',
	VerticalLineTo = 'V',
	CurveTo = 'C',
	SmoothCurveTo = 'S',
	QuadraticBezierCurve = 'Q',
	SmoothQuadraticBezierCurveTo = 'T',
	ElipticalArc = 'A',
	ClosePath = 'Z',
}

export class BaseAnchor extends Drawable {
	type = DrawableType.Anchor;
	parent: Path;
	anchorType = this.idx === 0 ? AnchorType.MoveTo : AnchorType.LineTo;

	toString = (): string =>
		`${this.anchorType} ${this.absPosition.x} ${this.absPosition.y}`
}
