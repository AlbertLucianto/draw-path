import { List } from 'immutable';
import { Drawable, DrawableType, IinitDrawable } from '../drawable/drawable.model';

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
	anchorType: AnchorType;

	constructor(params: IinitDrawable) {
		super({
			...params,
			type: DrawableType.Anchor,
		});
		this.anchorType = this.idx === 0 ? AnchorType.MoveTo : AnchorType.LineTo;
	}

	setRouteParentPath = (path: List<number>): BaseAnchor => {
		return new BaseAnchor({
			idx: this.idx,
			routeParentPath: path,
			absPosition: this.absPosition,
		});
	}

	toTransform = (): string =>
		`translate(${this.absPosition.x}px, ${this.absPosition.y}px)`

	toPath = (): string =>
		`${this.anchorType} ${this.absPosition.x} ${this.absPosition.y}`
}
