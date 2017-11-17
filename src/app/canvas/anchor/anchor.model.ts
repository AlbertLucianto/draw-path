import { DrawableType } from '../drawable/drawable.constant';
import { Drawable, IinitDrawable } from '../drawable/drawable.model';

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
	idx: number;
	anchorType = this.idx === 0 ? AnchorType.MoveTo : AnchorType.LineTo;

	constructor(params: IinitDrawable) {
		super(params);
		this.set('type', DrawableType.Anchor);
	}

	toTransform = (): string =>
		`translate(${this.absPosition.x}px, ${this.absPosition.y}px)`

	toString = (): string =>
		`${this.anchorType} ${this.absPosition.x} ${this.absPosition.y}`
}
