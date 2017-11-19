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
}

export type IAddAnchorAction = FluxStandardAction<{
	targetIn: Array<number>,
	anchorPosition: IPosition,
}, undefined>;

@Injectable()
export class PathActions {
	addAnchorAction = (targetIn: Array<number>, anchorPosition: IPosition): IAddAnchorAction => {
		return {
			type: PathActionType.PATH_ADD_ANCHOR,
			payload: { targetIn, anchorPosition },
			meta: undefined,
		};
	}
}
