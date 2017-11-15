import { ComponentRef } from '@angular/core';
import { IToolBase, RegisteredListener } from '../tool/tool.model';
import { PlaceAnchorAction } from './pentool.action';

export class Drawable { // Here for now
	pathFromRoot = (): Array<number> => {
		return new Array();
	}
}

export class PenTool implements IToolBase {
	listeners = new Array<RegisteredListener>();

	constructor() {
		this.listeners.concat([
			{ name: 'mousedown', handler: this.mouseDown, target: 'canvas' },
		]);
	}

	mouseDown = (e: MouseEvent, triggeringComponent: ComponentRef<any>) => {
		const path = (<Drawable>triggeringComponent.instance).pathFromRoot();
		return new PlaceAnchorAction(path, { x: e.clientX, y: e.clientY });
	}
}
