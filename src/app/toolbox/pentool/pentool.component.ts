import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ToolBase } from '../tool/tool.base.component';

@Component({
	selector: 'app-pentool',
	templateUrl: './pentool.component.html',
	styleUrls: ['./pentool.component.scss'],
	encapsulation: ViewEncapsulation.Emulated,
})
export class PentoolComponent extends ToolBase implements OnInit {
	ngOnInit() { }
}
