import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ToolBase } from '../tool/tool.base.component';

@Component({
	selector: 'app-selectiontool',
	templateUrl: './selectiontool.component.html',
	styleUrls: ['./selectiontool.component.scss'],
	encapsulation: ViewEncapsulation.Emulated,
})
export class SelectiontoolComponent extends ToolBase implements OnInit {
	ngOnInit() { }
}
