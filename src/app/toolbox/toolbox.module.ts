import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PentoolComponent } from './pentool/pentool.component';
import { SelectiontoolComponent } from './selectiontool/selectiontool.component';
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
		PentoolComponent,
		SelectiontoolComponent,
		ToolDirective,
	],
	entryComponents: [
		PentoolComponent,
		SelectiontoolComponent,
	],
	exports: [
		ToolboxComponent,
	],
})
export class ToolboxModule { }
