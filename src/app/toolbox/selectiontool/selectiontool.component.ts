import { dispatch } from '@angular-redux/store';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ToolBaseComponent } from '../tool/tool.base.component';
import { SelectToolAction } from '../toolbox.action';

@Component({
	selector: 'app-selectiontool',
	templateUrl: './selectiontool.component.html',
	styleUrls: ['./selectiontool.component.scss'],
	encapsulation: ViewEncapsulation.Emulated,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectionToolComponent extends ToolBaseComponent implements OnInit {
	ngOnInit() { }
	@dispatch() selectTool = () => new SelectToolAction(this.context.toolName).toObject();
}
