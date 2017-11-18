import { Injectable } from '@angular/core';
// import { createEpicMiddleware, Epic } from 'redux-observable';

// import { IAppState } from '../store/model';
import { PentoolEpics } from './pentool/pentool.epics';
import { SelectiontoolEpics } from './selectiontool/selectiontool.epics';
// import { ISelectToolAction, ToolboxActionType } from './toolbox.action';

@Injectable()
export class ToolboxEpics {
	constructor(
		private pentoolEpics: PentoolEpics,
		private selectionToolEpics: SelectiontoolEpics) { }

	public createEpics() {
		return [
			// createEpicMiddleware(this.createCoreToolboxEpic()),
			...this.pentoolEpics.createEpics(),
			...this.selectionToolEpics.createEpics(),
		];
	}

	// private createCoreToolboxEpic = (): Epic<ISelectToolAction, IAppState> => {
	// 	return (action$, store) => action$
	// 		.ofType(ToolboxActionType.SET_TOOL_TRAIT)
	// 		.map(action => {
	// 			console.log(action);
	// 			return { type: 'HELLO', payload: undefined, meta: undefined };
	// 		});
	// }
}
