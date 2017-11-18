import { List } from 'immutable';
import { Drawable } from '../../canvas/drawable/drawable.model';
import { RegisteredListener, ToolBase } from '../tool/tool.model';
import { ToolName } from '../toolbox.model';
import { PentoolActions } from './pentool.action';

export const createPentool = (): ToolBase => {
	const actions = new PentoolActions();
	const mouseDown = (e: MouseEvent, triggeringDrawable: Drawable) => {
		const pathFromRoot = triggeringDrawable.routeParentPath.toJS();
		return actions.placeAnchorAction(pathFromRoot, { x: e.clientX, y: e.clientY });
	};
	return new ToolBase({
		name: ToolName.PenTool,
		listeners: List<RegisteredListener>([
			{ name: 'mousedown', handler: mouseDown, target: 'canvas' },
		]),
	});
};
