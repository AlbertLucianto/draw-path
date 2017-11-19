import { Injectable } from '@angular/core';
import { FluxStandardAction } from 'flux-standard-action';

import { IPosition } from './canvas.model';

/**
 * Using CONSTANT naming convention and holding same value
 * to be able to check if an enum value is in enum keys
 */
export enum CanvasActionType {
	CANVAS_UPDATE_POSITION = 'CANVAS_UPDATE_POSITION',
	CANVAS_UPDATE_SCALE = 'CANVAS_UPDATE_SCALE',
}

export type IUpdatePositionAction = FluxStandardAction<IPosition, undefined>;
export type IUpdateScaleAction = FluxStandardAction<number, undefined>;

@Injectable()
export class CanvasActions {
	updatePosition = (position: IPosition): IUpdatePositionAction => ({
		type: CanvasActionType.CANVAS_UPDATE_POSITION,
		payload: position,
		meta: undefined,
	})

	updateScale = (scaleBy: number): IUpdateScaleAction => ({
		type: CanvasActionType.CANVAS_UPDATE_SCALE,
		payload: scaleBy,
		meta: undefined,
	})
}
