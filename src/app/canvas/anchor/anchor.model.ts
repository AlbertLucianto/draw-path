import { DrawableType } from '../drawable/drawable.constant';
import { Drawable } from '../drawable/drawable.model';
import { Path } from '../path/path.model';

export enum AnchorType {
	MoveTo = 'M',
	LineTo = 'l',
	HorizontalLineTo = 'h',
	VerticalLineTo = 'v',
	CurveTo = 'c',
	SmoothCurveTo = 's',
	QuadraticBezierCurve = 'q',
	SmoothQuadraticBezierCurveTo = 't',
	ElipticalArc = 'a',
	ClosePath = 'z',
}

export class BaseAnchor extends Drawable {
	type = DrawableType.Anchor;
	children = undefined;
	parent: Path;
	anchorType = this.idx === 0 ? AnchorType.MoveTo : AnchorType.LineTo;
	toString = (): string =>
		`${this.anchorType} ${this.relPosition.x} ${this.relPosition.y}`
}
