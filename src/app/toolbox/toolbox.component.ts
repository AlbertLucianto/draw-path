import { Component, ViewEncapsulation } from '@angular/core';
import { PentoolComponent } from './pentool/pentool.component';

@Component({
	selector: 'app-toolbox',
	templateUrl: './toolbox.component.html',
	styleUrls: ['./toolbox.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class ToolboxComponent {
	public toolList = ['selectiontool', 'pentool'];
}
