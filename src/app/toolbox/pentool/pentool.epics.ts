import { Injectable } from '@angular/core';
import { FluxStandardAction } from 'flux-standard-action';
import { createEpicMiddleware, Epic } from 'redux-observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/takeUntil';

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
			createEpicMiddleware(this.addThenListenUpdateUntilAnchorPlaced()),
			createEpicMiddleware(this.zipIfHeadAnchorClicked()),
		];
	}

	private setPentoolTraitOnSelected = (): Epic<IToolboxGeneralAction, IAppState> => {
		return (action$, store) => action$
			.ofType(ToolboxActionType.TOOLBOX_SELECT_TOOL)
			.filter(action => action.payload.toolName === ToolName.PenTool)
			.map(action => this.toolboxActions.setToolTraitAction(createPentool()));
	}

	private addThenListenUpdateUntilAnchorPlaced = (): Epic<FluxStandardAction<any, undefined>, IAppState> => {
		return (action$, store) => action$
			.ofType(PentoolActionType.PENTOOL_MOUSE_DOWN_ON_CANVAS)
			.map(action => {
				const boardState = <IBoard>store.getState().canvas.get('board').toJS();
				const position = calcPositionInCanvas(<IPosition>action.payload.absPoint, boardState);
				return this.pathActions.addAnchorAction(action.payload.targetIn, position);
			})
			.map(action => this.pathActions.addAnchorAction(action.payload.targetIn, action.payload.anchorPosition))
			.switchMap(() => action$
				.ofType(PentoolActionType.PENTOOL_MOVE_CURSOR_ON_CANVAS)
				.map(action => {
					const boardState = <IBoard>store.getState().canvas.get('board').toJS();
					const position = calcPositionInCanvas(<IPosition>action.payload.absPoint, boardState);
					return this.pathActions.updateAnchorAction(action.payload.targetIn, action.payload.idx, position); })
				.takeUntil(action$.ofType(PentoolActionType.PENTOOL_MOUSE_DOWN_ON_CANVAS)));
	}

	private zipIfHeadAnchorClicked = (): Epic<FluxStandardAction<any, undefined>, IAppState> => {
		return (action$, store) => action$
			.ofType(PentoolActionType.PENTOOL_MOUSE_DOWN_ON_ANCHOR)
			.map(action => {
				console.log('hello');
				if (action.payload.isHead) {
					return this.pathActions.zipPathAction(action.payload.targetIn);
				}
			});
	}
}
