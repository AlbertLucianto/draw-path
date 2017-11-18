import { Injectable } from '@angular/core';
import { createEpicMiddleware, Epic } from 'redux-observable';

import { IAppState } from '../../store/model';
import { ISelectToolAction } from '../toolbox.action';

@Injectable()
export class PentoolEpics {
	public createEpics() {
		return [
			createEpicMiddleware(this.setPentoolTraitOnSelected()),
		];
	}

	private setPentoolTraitOnSelected = (): Epic<ISelectToolAction, IAppState> => {
		return (action$, store) => action$
			.map(action => {
				console.log(action);
				return action;
			});
	}
}
