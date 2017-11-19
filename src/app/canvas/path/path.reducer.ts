import { Action, Reducer } from 'redux';

import { CanvasState } from '../canvas.model';
import { PathActionType } from './path.action';
import { IAddAnchorAction } from './path.action';
import * as pathCore from './path.core';

export const pathReducer: Reducer<CanvasState> = (state: CanvasState, action: Action) => {
	switch (action.type) {
		case PathActionType.AddAnchor:
			const castAction = <IAddAnchorAction>action;
			return <CanvasState>pathCore.addAnchor(state, castAction.payload.targetIn, castAction.payload.anchorPosition);
	}
	return state;
};
