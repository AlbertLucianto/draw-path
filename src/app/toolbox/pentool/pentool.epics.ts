import { Injectable } from '@angular/core';
import { createEpicMiddleware, Epic } from 'redux-observable';

import { FluxStandardAction } from 'flux-standard-action';

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
			.ofType(ToolboxActionType.TOOLBOX_SELECT_TOOL)
			.filter(action => action.payload.toolName === ToolName.PenTool)
			.map(action => this.toolboxActions.setToolTraitAction(createPentool()));
	}

	private placeAnchorOnceInformed = (): Epic<FluxStandardAction<any, undefined>, IAppState> => {
		return (action$, store) => action$
			.ofType(PentoolActionType.PENTOOL_PLACE_ANCHOR)
			.map(action => {
				// let { absPoint } = action.payload;
				return this.pathActions.addAnchorAction(action.payload.targetIn, action.payload.absPoint);
			});
	}
}
