import { Injectable } from '@angular/core';
import { createEpicMiddleware, Epic } from 'redux-observable';

import { IAppState } from '../store/model';
import { PentoolEpics } from './pentool/pentool.epics';
import { ISelectToolAction } from './toolbox.action';

@Injectable()
export class ToolboxEpics {
	constructor(private pentoolEpics: PentoolEpics) { }

	public createEpics() {
		return [
			createEpicMiddleware(this.createCoreToolboxEpic()),
			...this.pentoolEpics.createEpics(),
		];
	}

	private createCoreToolboxEpic = (): Epic<ISelectToolAction, IAppState> => {
		return (action$, store) => action$
			.map(action => {
				console.log('hey');
				return action;
			});
	}
}
