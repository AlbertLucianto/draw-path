import { Action, Reducer } from 'redux';
import { PentoolActionType } from './pentool/pentool.action';
import { pentoolReducer } from './pentool/pentool.reducer';
import { SelectiontoolActionType } from './selectiontool/selectiontool.action';
import { selectiontoolReducer } from './selectiontool/selectiontool.reducer';
import { SelectToolAction } from './toolbox.action';
import { ToolboxActionType } from './toolbox.action';
import { IToolboxState, ToolboxState, ToolName } from './toolbox.model';

export const toolboxReducer: Reducer<IToolboxState> = (state: IToolboxState = new ToolboxState(ToolName.SelectionTool), action: Action) => {
	switch (true) {
		case action.type in PentoolActionType:
			return pentoolReducer(state, action);
		case action.type in SelectiontoolActionType:
			return selectiontoolReducer(state, action);
	}
	switch (action.type) {
		case ToolboxActionType.SELECT_TOOL:
			return new ToolboxState((<SelectToolAction>action).toolName);
	}
	return state;
};
