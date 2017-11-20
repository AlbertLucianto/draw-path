import { List } from 'immutable';
import { Action, Reducer } from 'redux';
import { CanvasActionType, IUpdatePositionAction } from './canvas.action';
import { Board, CanvasState, Position } from './canvas.model';
import { PathActionType } from './path/path.action';
// import { Group } from './group/group.model';
import { Path } from './path/path.model';
import { pathReducer } from './path/path.reducer';

export const canvasReducer: Reducer<CanvasState> = (
	state = new CanvasState({
		root: List([
			new Path({ absPosition: new Position({ x: 100, y: 100 }), idx: 0 }),
			new Path({ absPosition: new Position({ x: 100, y: 100 }), idx: 1 }),
			// new Group({ absPosition: { x: 100, y: 100 }, idx: 0 }),
		]),
		board: new Board(),
	}),
	action: Action) => {
		switch (true) {
			case action.type in PathActionType:
				return pathReducer(state, action);
		}
		switch (action.type) {
			case CanvasActionType.CANVAS_UPDATE_POSITION:
				const { x, y } = (<IUpdatePositionAction>action).payload;
				return state.setIn(['board', 'topLeft'], new Position({ x, y }));
			case CanvasActionType.CANVAS_UPDATE_SCALE:
				return state;
		}
		return state;
};
