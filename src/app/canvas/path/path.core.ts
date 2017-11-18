import { CanvasState, Position } from '../canvas.model';
import { Path } from './path.model';

export const addAnchor = (state: CanvasState, path: Path, anchorPosition: Position) => {
	return state.updateIn(path.routeParentPath.toJS(), (accessedPath: Path): Path => accessedPath.addAnchor(anchorPosition));
};
