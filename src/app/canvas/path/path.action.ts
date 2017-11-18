import { CanvasActionType } from '../canvas.constant';

declare module '../canvas.constant' {
	export enum CanvasActionType { // tslint:disable-line
		HelloWorld = 'Hello',
	}
}

const CanvasActionTypeValue = CanvasActionType as any;
CanvasActionTypeValue['HelloWorld'] = 'Hello';
