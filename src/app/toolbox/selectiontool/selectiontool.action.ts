import { Action } from 'redux';
import { CustomAction } from '../toolbox.action';

export enum SelectiontoolActionType {
	SELECT_DRAWABLE = 'TOOLBOX.SELECTIONTOOL.SELECT_DRAWABLE',
}

export class SelectDrawableAction extends CustomAction implements Action {
	type = SelectiontoolActionType.SELECT_DRAWABLE;
	targetIn: Array<number>;
	absPoint: { x: number, y: number };

	constructor(targetIn: Array<number>, absPoint: { x: number, y: number }) {
		super();
		this.targetIn = targetIn;
		this.absPoint = absPoint;
	}
}
