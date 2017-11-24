import { List } from 'immutable';
import { RegisteredListener } from '../../canvas/canvas.model';
import { Drawable } from '../../canvas/drawable/drawable.model';
import { ToolBase } from '../tool/tool.model';
import { ToolName } from '../toolbox.model';
import { PentoolActions } from './pentool.action';

export const createPentool = (): ToolBase => {
	const actions = new PentoolActions();

	const mouseDownOnCanvas = (e: MouseEvent, triggeringDrawable: Drawable) => {
		const pathFromRoot = [ ...triggeringDrawable.routeParentPath.toJS(), triggeringDrawable.idx ];
		return actions.mouseDownOnCanvasAction(pathFromRoot, { x: e.clientX, y: e.clientY });
	};

	const mouseMoveOnCanvas = (e: MouseEvent, triggeringDrawable: Drawable) => {
		const pathFromRoot = [ ...triggeringDrawable.routeParentPath.toJS(), triggeringDrawable.idx ];
		return actions.moveCursorOnCanvasAction(pathFromRoot, triggeringDrawable.get('children').size - 1, { x: e.clientX, y: e.clientY });
	};

	const mouseDownOnHeadAnchor = (e: MouseEvent, triggeringDrawable: Drawable) => {
		// e.stopPropagation();
		const pathFromRoot = [ ...triggeringDrawable.routeParentPath.toJS() ];
		return actions.mouseDownOnAnchorAction(pathFromRoot, triggeringDrawable.idx);
	};

	return new ToolBase({
		name: ToolName.PenTool,
		listeners: List<RegisteredListener>([
			{ name: 'mousedown', handler: mouseDownOnCanvas, target: 'canvas' },
			{ name: 'mousemove', handler: mouseMoveOnCanvas, target: 'canvas' },
			{ name: 'mousedown', handler: mouseDownOnHeadAnchor, target: 'anchor' },
		]),
	});
};
