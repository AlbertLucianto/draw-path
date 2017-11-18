import { Injectable } from '@angular/core';
import { FluxStandardAction } from 'flux-standard-action';

export enum SelectiontoolActionType {
	SELECT_DRAWABLE = 'TOOLBOX.SELECTIONTOOL.SELECT_DRAWABLE',
}

export type ISelectDrawableAction = FluxStandardAction<{
	drawable: Object,
}, undefined>;

@Injectable()
export class SelectiontoolActions {
	selectDrawableAction = (drawable: Object): ISelectDrawableAction => ({
		type: SelectiontoolActionType.SELECT_DRAWABLE,
		payload: { drawable },
		meta: undefined,
	})
}
