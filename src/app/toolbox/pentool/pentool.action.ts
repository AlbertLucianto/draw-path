import { Injectable } from '@angular/core';
import { FluxStandardAction } from 'flux-standard-action';

/**
 * Using CONSTANT naming convention and holding same value
 * to be able to check if an enum value is in enum keys
 */
export enum PentoolActionType {
	PENTOOL_PLACE_ANCHOR = 'PENTOOL_PLACE_ANCHOR',
	PENTOOL_MOVE_CURSOR = 'PENTOOL_MOVE_CURSOR',
}

export interface IPlaceAnchorPayload { targetIn: Array<number>; absPoint: { x: number, y: number }; }

export type IPlaceAnchorAction = FluxStandardAction<IPlaceAnchorPayload, undefined>;

@Injectable()
export class PentoolActions {
	placeAnchorAction = (targetIn: Array<number>, absPoint: { x: number, y: number }): IPlaceAnchorAction => ({
		type: PentoolActionType.PENTOOL_PLACE_ANCHOR,
		payload: { targetIn, absPoint },
		meta: undefined,
	})

	moveCursorAction = (targetIn: Array<number>, absPoint: { x: number, y: number }): IPlaceAnchorAction => ({
		type: PentoolActionType.PENTOOL_MOVE_CURSOR,
		payload: { targetIn, absPoint },
		meta: undefined,
	})
}
