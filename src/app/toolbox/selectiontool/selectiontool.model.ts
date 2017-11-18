import { List } from 'immutable';
// import { Drawable } from '../../canvas/drawable/drawable.model';
import { RegisteredListener, ToolBase } from '../tool/tool.model';
import { ToolName } from '../toolbox.model';
// import { SelectiontoolActions } from './selectiontool.action';

export const createSelectiontool = (): ToolBase => {
	// const actions = new SelectiontoolActions();
	return new ToolBase({
		name: ToolName.SelectionTool,
		listeners: List<RegisteredListener>([]),
	});
};
