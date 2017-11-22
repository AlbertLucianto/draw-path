import { Injectable } from '@angular/core';
import { FluxStandardAction } from 'flux-standard-action';

/**
 * Using CONSTANT naming convention and holding same value
 * to be able to check if an enum value is in enum keys
 */
export enum PentoolActionType {
	PENTOOL_MOUSE_DOWN = 'PENTOOL_MOUSE_DOWN',
	PENTOOL_MOVE_CURSOR = 'PENTOOL_MOVE_CURSOR',
}

export interface IPlaceAnchorPayload { targetIn: Array<number>; absPoint: { x: number, y: number }; }
export interface IMoveCursorPayload extends IPlaceAnchorPayload { idx: number; }

export type IPlaceAnchorAction = FluxStandardAction<IPlaceAnchorPayload, undefined>;
export type IMoveCursorAction = FluxStandardAction<IMoveCursorPayload, undefined>;

@Injectable()
export class PentoolActions {
	/**
	 * Note:
	 *
	 * Here it does not need any `@dispatch()` decorator as it will only be
	 * dispatched by view components, not epics. If decorated, it will redundantly
	 * dispatch twice.
	 */
	placeAnchorAction = (targetIn: Array<number>, absPoint: { x: number, y: number }): IPlaceAnchorAction => ({
		type: PentoolActionType.PENTOOL_MOUSE_DOWN,
		payload: { targetIn, absPoint },
		meta: undefined,
	})

	moveCursorAction = (targetIn: Array<number>, idx: number, absPoint: { x: number, y: number }): IMoveCursorAction => ({
		type: PentoolActionType.PENTOOL_MOVE_CURSOR,
		payload: { targetIn, idx, absPoint },
		meta: undefined,
	})
}
