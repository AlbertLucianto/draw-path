import { List } from 'immutable';
import { Action, Reducer } from 'redux';
// import { CanvasActionType } from './canvas.constant';
import { CanvasState, Position } from './canvas.model';
import { PathActionType } from './path/path.action';
// import { Group } from './group/group.model';
import { Path } from './path/path.model';
import { pathReducer } from './path/path.reducer';

export const canvasReducer: Reducer<CanvasState> = (
	state = new CanvasState({
		root: List([
			new Path({ absPosition: new Position({ x: 100, y: 100 }), idx: 0 })
				.addAnchor(new Position({ x: 100, y: 100 }))
				.addAnchor(new Position({ x: 200, y: 200 }))
				.addAnchor(new Position({ x: 100, y: 300 })),
			new Path({ absPosition: new Position({ x: 100, y: 100 }), idx: 1 }),
			// new Group({ absPosition: { x: 100, y: 100 }, idx: 0 }),
		]),
	}),
	action: Action) => {
		console.log(action, action.type in PathActionType);
		switch (true) {
			case true:
				console.log(action);
				return pathReducer(state, action);
		}
		return state;
};
