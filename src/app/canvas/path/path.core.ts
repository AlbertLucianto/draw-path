import { CanvasState, IPosition } from '../canvas.model';
import { Path } from './path.model';

export const addAnchor = (state: CanvasState, targetIn: Array<number>, anchorPosition: IPosition) => {
	return state.updateIn(['root', ...targetIn], (accessedPath: Path): Path => {
		return accessedPath.addAnchor(anchorPosition);
	});
};

export const updateAnchor = (state: CanvasState, targetIn: Array<number>, anchorPosition: IPosition) => {
	return state.updateIn(['root', ...targetIn.slice(0, -1)], (accessedPath: Path): Path => {
		return accessedPath.updateAnchor(targetIn[-1], anchorPosition);
	});
};
