import { Injectable } from '@angular/core';

import { ToolboxEpics } from '../toolbox/toolbox.epics';

@Injectable()
export class RootEpics {
	constructor(private toolboxEpics: ToolboxEpics) { }

	public createEpics() {
		return [
			...this.toolboxEpics.createEpics(),
		];
	}
}
