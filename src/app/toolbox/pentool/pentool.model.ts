import { List } from 'immutable';
import { Drawable } from '../../canvas/drawable/drawable.model';
import { RegisteredListener, ToolBase } from '../tool/tool.model';
import { ToolName } from '../toolbox.model';
import { PlaceAnchorAction } from './pentool.action';

const mouseDown = (e: MouseEvent, triggeringDrawable: Drawable) => {
	const pathFromRoot = triggeringDrawable.routeParentPath.toJS();
	return new PlaceAnchorAction(pathFromRoot, { x: e.clientX, y: e.clientY });
};

export const Pentool = new ToolBase({
	name: ToolName.PenTool,
	listeners: List<RegisteredListener>([
		{ name: 'mousedown', handler: mouseDown, target: 'canvas' },
	]),
});
