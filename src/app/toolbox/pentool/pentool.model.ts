import { Drawable } from '../../canvas/drawable/drawable.model';
import { IToolBase, RegisteredListener } from '../tool/tool.model';
import { PlaceAnchorAction } from './pentool.action';

export class PenTool implements IToolBase {
	listeners = new Array<RegisteredListener>();

	constructor() {
		this.listeners.concat([
			{ name: 'mousedown', handler: this.mouseDown, target: 'canvas' },
		]);
	}

	mouseDown = (e: MouseEvent, triggeringDrawable: Drawable) => {
		const pathFromRoot = triggeringDrawable.pathFromRoot();
		return new PlaceAnchorAction(pathFromRoot, { x: e.clientX, y: e.clientY });
	}
}
