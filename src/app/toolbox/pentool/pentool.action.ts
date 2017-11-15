import { Action } from 'redux';
import { CustomAction } from '../toolbox.action';
import { ToolboxActionType } from '../toolbox.constant';

export class PlaceAnchorAction extends CustomAction implements Action {
	type = ToolboxActionType.PLACE_ANCHOR;
	targetIn: Array<number>;
	absPoint: { x: number, y: number };

	constructor(targetIn: Array<number>, absPoint: { x: number, y: number }) {
		super();
		this.targetIn = targetIn;
		this.absPoint = absPoint;
	}
}
