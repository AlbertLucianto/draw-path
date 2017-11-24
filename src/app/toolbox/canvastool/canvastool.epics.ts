import { Injectable } from '@angular/core';
import { createEpicMiddleware, Epic } from 'redux-observable';

import { IAppState } from '../../store/model';
import { IToolboxGeneralAction, ToolboxActions, ToolboxActionType } from '../toolbox.action';
import { ToolName } from '../toolbox.model';
import { createCanvastool } from './canvastool.model';

@Injectable()
export class CanvastoolEpics {
	constructor(private toolboxActions: ToolboxActions) { }

	public createEpics = () => {
		return [
			createEpicMiddleware(this.setCanvastoolTraitOnSelected()),
		];
	}

	private setCanvastoolTraitOnSelected = (): Epic<IToolboxGeneralAction, IAppState> => {
		return (action$, store) => action$
			.ofType(ToolboxActionType.TOOLBOX_SELECT_TOOL)
			.filter(action => action.payload.toolName === ToolName.Canvastool)
			.map(action => this.toolboxActions.setToolTraitAction(createCanvastool()));
	}
}
