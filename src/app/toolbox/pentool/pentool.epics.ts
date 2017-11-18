import { Injectable } from '@angular/core';
import { createEpicMiddleware, Epic } from 'redux-observable';

import { IAppState } from '../../store/model';
import { IToolboxGeneralAction, ToolboxActions, ToolboxActionType } from '../toolbox.action';
import { ToolName } from '../toolbox.model';
import { createPentool } from './pentool.model';
// import { PentoolActions } from './pentool.action';

@Injectable()
export class PentoolEpics {
	constructor(private toolboxActions: ToolboxActions) { }

	public createEpics = () => {
		return [
			createEpicMiddleware(this.setPentoolTraitOnSelected()),
		];
	}

	private setPentoolTraitOnSelected = (): Epic<IToolboxGeneralAction, IAppState> => {
		return (action$, store) => action$
			.ofType(ToolboxActionType.SELECT_TOOL)
			.filter(action => action.payload.toolName === ToolName.PenTool)
			.map(action => this.toolboxActions.setToolTraitAction(createPentool()));
	}
}
