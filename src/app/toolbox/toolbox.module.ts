import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PenToolComponent } from './pentool/pentool.component';
import { SelectionToolComponent } from './selectiontool/selectiontool.component';
import { ToolContainerComponent } from './tool/tool.container.component';
import { ToolDirective } from './tool/tool.directive';
import { ToolboxComponent } from './toolbox.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		ToolboxComponent,
		ToolContainerComponent,
		PenToolComponent,
		SelectionToolComponent,
		ToolDirective,
	],
	entryComponents: [
		PenToolComponent,
		SelectionToolComponent,
	],
	exports: [
		ToolboxComponent,
	],
})
export class ToolboxModule { }
