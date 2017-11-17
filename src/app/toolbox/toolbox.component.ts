import { select, WithSubStore } from '@angular-redux/store';
import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ToolName } from './toolbox.constant';
import { toolboxReducer } from './toolbox.reducer';

@WithSubStore({
	basePathMethodName: 'getSubPath',
	localReducer: toolboxReducer,
})
@Component({
	selector: 'app-toolbox',
	templateUrl: './toolbox.component.html',
	styleUrls: ['./toolbox.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class ToolboxComponent {
	public toolList = [
		ToolName.SelectionTool,
		ToolName.PenTool,
		ToolName.SelectionTool,
		ToolName.PenTool,
		ToolName.SelectionTool,
		ToolName.PenTool,
	];
	@select() readonly selected$: Observable<ToolName>;

	getSubPath = () => ['toolbox'];
}
