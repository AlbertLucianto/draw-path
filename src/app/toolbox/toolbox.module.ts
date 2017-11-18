import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PenToolComponent } from './pentool/pentool.component';
import { PentoolEpics } from './pentool/pentool.epics';
import { SelectionToolComponent } from './selectiontool/selectiontool.component';
import { ToolContainerComponent } from './tool/tool.container.component';
import { ToolDirective } from './tool/tool.directive';
import { ToolboxActions } from './toolbox.action';
import { ToolboxComponent } from './toolbox.component';
import { ToolboxEpics } from './toolbox.epics';

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
	providers: [
		ToolboxEpics,
		PentoolEpics,
		ToolboxActions,
	],
	exports: [
		ToolboxComponent,
	],
})
export class ToolboxModule { }
