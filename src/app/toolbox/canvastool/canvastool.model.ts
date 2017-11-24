import { List } from 'immutable';
import { RegisteredListener } from '../../canvas/canvas.model';
import { Drawable } from '../../canvas/drawable/drawable.model';
import { ToolBase } from '../tool/tool.model';
import { ToolName } from '../toolbox.model';
import { CanvastoolActions } from './canvastool.action';

export const createCanvastool = (): ToolBase => {
	const actions = new CanvastoolActions();

	const mouseDownOnCanvas = (e: MouseEvent, triggeringDrawable: Drawable) => {
		return actions.mouseDownOnCanvasAction({ x: e.clientX, y: e.clientY });
	};

	const mouseMoveOnCanvas = (e: MouseEvent, triggeringDrawable: Drawable) => {
		return actions.moveCursorOnCanvasAction({ x: e.clientX, y: e.clientY });
	};

	const mouseUpOnCanvas = (e: MouseEvent, triggeringDrawable: Drawable) => {
		return actions.mouseUpOnCanvasAction({ x: e.clientX, y: e.clientY });
	};

	return new ToolBase({
		name: ToolName.Canvastool,
		listeners: List<RegisteredListener>([
			{ name: 'mousedown', handler: mouseDownOnCanvas, target: 'canvas' },
			{ name: 'mousemove', handler: mouseMoveOnCanvas, target: 'canvas' },
			{ name: 'mouseup', handler: mouseUpOnCanvas, target: 'canvas' },
		]),
	});
};
