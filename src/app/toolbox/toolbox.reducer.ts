import { Action, Reducer } from 'redux';
import { SelectToolAction } from './toolbox.action';
import { ToolboxActionType, ToolName } from './toolbox.constant';
import { IToolboxState, ToolboxState } from './toolbox.model';

export const toolboxReducer: Reducer<IToolboxState> = (state: IToolboxState = new ToolboxState(ToolName.SelectionTool), action: Action) => {
	switch (action.type) {
		case ToolboxActionType.SELECT_TOOL:
			return new ToolboxState((<SelectToolAction>action).toolName);
	}
	return state;
};
