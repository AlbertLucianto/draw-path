import { dispatch } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import { FluxStandardAction } from 'flux-standard-action';
import { IPosition } from '../canvas.model';
// import { Path } from './path.model';

/**
 * Using CONSTANT naming convention and holding same value
 * to be able to check if an enum value is in enum keys
 */
export enum PathActionType {
	PATH_ADD_ANCHOR = 'PATH_ADD_ANCHOR',
	PATH_UPDATE_ANCHOR = 'PATH_UPDATE_ANCHOR',
	PATH_DELETE_ANCHOR = 'PATH_DELETE_ANCHOR',
}

export interface IAddAnchorPayload {
	targetIn: Array<number>;
	anchorPosition: IPosition;
}
export interface IUpdateAnchorPayload extends IAddAnchorPayload {
	idx: number;
}

export type IAddAnchorAction = FluxStandardAction<IAddAnchorPayload, undefined>;
export type IUpdateAnchorAction = FluxStandardAction<IUpdateAnchorPayload, undefined>;

@Injectable()
export class PathActions {
	/**
	 * Note:
	 *
	 * Don't forget to add `@dispatch()` if you want to achieve continuous dispatch.
	 * Otherwise, it will be just passing to the next operator, and only the last action is dispatched
	 */
	@dispatch()
	addAnchorAction = (targetIn: Array<number>, anchorPosition: IPosition): IAddAnchorAction => {
		return {
			type: PathActionType.PATH_ADD_ANCHOR,
			payload: { targetIn, anchorPosition },
			meta: undefined,
		};
	}

	@dispatch()
	updateAnchorAction = (targetIn: Array<number>, idx: number, anchorPosition: IPosition): IUpdateAnchorAction => {
		return {
			type: PathActionType.PATH_UPDATE_ANCHOR,
			payload: { targetIn, idx, anchorPosition },
			meta: undefined,
		};
	}
}
