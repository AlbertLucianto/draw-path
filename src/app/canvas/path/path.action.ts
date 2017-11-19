import { Injectable } from '@angular/core';
import { FluxStandardAction } from 'flux-standard-action';
import { Position } from '../canvas.model';
// import { Path } from './path.model';

export enum PathActionType {
	AddAnchor = 'CANVAS.PATH.ADD_ANCHOR',
}

export type IAddAnchorAction = FluxStandardAction<{
	targetIn: Array<number>,
	anchorPosition: Position,
}, undefined>;

@Injectable()
export class PathActions {
	addAnchorAction = (targetIn: Array<number>, anchorPosition: Position): IAddAnchorAction => ({
		type: PathActionType.AddAnchor,
		payload: { targetIn, anchorPosition },
		meta: undefined,
	})
}
