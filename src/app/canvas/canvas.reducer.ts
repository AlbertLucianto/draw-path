import { Action, Reducer } from 'redux';
import { CanvasActionType } from './canvas.constant';
import { CanvasState } from './canvas.model';
// import { Group } from './group/group.model';
import { Path } from './path/path.model';

export const canvasReducer: Reducer<CanvasState> = (
	state = new CanvasState({
		root: [
			new Path({ absPosition: { x: 100, y: 100 }, idx: 0 })
				.addAnchor({ x: 100, y: 100 })
				.addAnchor({ x: 200, y: 200 })
				.addAnchor({ x: 100, y: 300 }),
			new Path({ absPosition: { x: 100, y: 100 }, idx: 1 }),
			// new Group({ absPosition: { x: 100, y: 100 }, idx: 0 }),
		],
	}),
	action: Action) => {
		switch (action.type) {
			case CanvasActionType.AddAnchor:
		}
		return state;
};
