import { List } from 'immutable';
import { RegisteredListener } from '../../canvas/canvas.model';
import { Drawable } from '../../canvas/drawable/drawable.model';
import { ToolBase } from '../tool/tool.model';
import { ToolName } from '../toolbox.model';
import { PentoolActions } from './pentool.action';

export const createPentool = (): ToolBase => {
	const actions = new PentoolActions();

	const mouseDown = (e: MouseEvent, triggeringDrawable: Drawable) => {
		const pathFromRoot = [ ...triggeringDrawable.routeParentPath.toJS(), triggeringDrawable.idx ];
		return actions.placeAnchorAction(pathFromRoot, { x: e.clientX, y: e.clientY });
	};

	const mouseMove = (e: MouseEvent, triggeringDrawable: Drawable) => {
		const pathFromRoot = [ ...triggeringDrawable.routeParentPath.toJS(), triggeringDrawable.idx ];
		return actions.moveCursorAction(pathFromRoot, triggeringDrawable.get('children').size - 1, { x: e.clientX, y: e.clientY });
	};

	return new ToolBase({
		name: ToolName.PenTool,
		listeners: List<RegisteredListener>([
			{ name: 'mousedown', handler: mouseDown, target: 'canvas' },
			{ name: 'mousemove', handler: mouseMove, target: 'canvas' },
		]),
	});
};
