import { Injectable } from '@angular/core';
import { FluxStandardAction } from 'flux-standard-action';

export enum PentoolActionType {
	PLACE_ANCHOR = 'TOOLBOX.PENTOOL.PLACE_ANCHOR',
}

export interface IPlaceAnchorPayload { targetIn: Array<number>; absPoint: { x: number, y: number }; }

export type IPlaceAnchorAction = FluxStandardAction<IPlaceAnchorPayload, undefined>;

@Injectable()
export class PentoolActions {
	placeAnchorAction = (targetIn: Array<number>, absPoint: { x: number, y: number }): IPlaceAnchorAction => ({
		type: PentoolActionType.PLACE_ANCHOR,
		payload: { targetIn, absPoint },
		meta: undefined,
	})
}
