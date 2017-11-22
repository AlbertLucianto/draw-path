import { Action, Reducer } from 'redux';

import { CanvasState } from '../canvas.model';
import {  IAddAnchorAction, IUpdateAnchorAction, PathActionType } from './path.action';
import * as pathCore from './path.core';

export const pathReducer: Reducer<CanvasState> = (state: CanvasState, action: Action) => {
	switch (action.type) {
		case PathActionType.PATH_ADD_ANCHOR:
			const addAction = <IAddAnchorAction>action;
			return <CanvasState>pathCore.addAnchor(state, addAction.payload.targetIn, addAction.payload.anchorPosition);
		case PathActionType.PATH_UPDATE_ANCHOR:
			const updateAction = <IUpdateAnchorAction>action;
			return <CanvasState>pathCore.updateAnchor(state,
				updateAction.payload.targetIn,
				updateAction.payload.idx,
				updateAction.payload.anchorPosition);
	}
	return state;
};
