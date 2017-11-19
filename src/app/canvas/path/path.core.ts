import { CanvasState, IPosition, Position } from '../canvas.model';
import { Path } from './path.model';

export const addAnchor = (state: CanvasState, targetIn: Array<number>, anchorPosition: Position|IPosition) => {
	return state.updateIn(['root', ...targetIn], (accessedPath: Path): Path => {
		return accessedPath.addAnchor(anchorPosition);
	});
};
