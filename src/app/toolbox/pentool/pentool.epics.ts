import { Injectable } from '@angular/core';
import { createEpicMiddleware, Epic } from 'redux-observable';

import { FluxStandardAction } from 'flux-standard-action';

import { IBoard, IPosition } from '../../canvas/canvas.model';
import { PathActions } from '../../canvas/path/path.action';
import { IAppState } from '../../store/model';
import { IToolboxGeneralAction, ToolboxActions, ToolboxActionType } from '../toolbox.action';
import { ToolName } from '../toolbox.model';
import { PentoolActionType } from './pentool.action';
import { createPentool } from './pentool.model';

const calcPositionInCanvas = (input: IPosition, boardState: IBoard): IPosition => {
	const { moved, scale, topLeft } = boardState;
	return {
		x: (input.x - moved.x - topLeft.x) / scale,
		y: (input.y - moved.y - topLeft.y) / scale,
	};
};

@Injectable()
export class PentoolEpics {
	constructor(
		private toolboxActions: ToolboxActions,
		private pathActions: PathActions) { }

	public createEpics = () => {
		return [
			createEpicMiddleware(this.setPentoolTraitOnSelected()),
			createEpicMiddleware(this.placeAnchorOnceInformed()),
		];
	}

	private setPentoolTraitOnSelected = (): Epic<IToolboxGeneralAction, IAppState> => {
		return (action$, store) => action$
			.ofType(ToolboxActionType.TOOLBOX_SELECT_TOOL)
			.filter(action => action.payload.toolName === ToolName.PenTool)
			.map(action => this.toolboxActions.setToolTraitAction(createPentool()));
	}

	private placeAnchorOnceInformed = (): Epic<FluxStandardAction<any, undefined>, IAppState> => {
		return (action$, store) => action$
			.ofType(PentoolActionType.PENTOOL_PLACE_ANCHOR)
			.map(action => {
				const boardState = <IBoard>store.getState().canvas.get('board').toJS();
				const position = calcPositionInCanvas(<IPosition>action.payload.absPoint, boardState);
				return this.pathActions.addAnchorAction(action.payload.targetIn, position);
			});
	}
}
