import { Injectable } from '@angular/core';
import { AnyAction } from 'redux';
import { createEpicMiddleware, Epic } from 'redux-observable';

import { PathActions } from '../../canvas/path/path.action';
import { IAppState } from '../../store/model';
import { IToolboxGeneralAction, ToolboxActions, ToolboxActionType } from '../toolbox.action';
import { ToolName } from '../toolbox.model';
import { PentoolActionType } from './pentool.action';
import { createPentool } from './pentool.model';

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
			.ofType(ToolboxActionType.SELECT_TOOL)
			.filter(action => action.payload.toolName === ToolName.PenTool)
			.map(action => this.toolboxActions.setToolTraitAction(createPentool()));
	}

	private placeAnchorOnceInformed = (): Epic<AnyAction, IAppState> => {
		return (action$, store) => action$
			.ofType(PentoolActionType.PLACE_ANCHOR)
			.map(action => {
				console.log(action);
				return this.pathActions.addAnchorAction(action.payload.targetIn, action.payload.absPoint);
			});
	}
}
