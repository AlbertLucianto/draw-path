import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PentoolComponent } from './pentool/pentool.component';
import { ToolContainerComponent } from './tool/tool.container.component';
import { ToolboxComponent } from './toolbox.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		ToolboxComponent,
		ToolContainerComponent,
		PentoolComponent,
	],
	entryComponents: [
		PentoolComponent,
	],
	exports: [
		ToolboxComponent,
	],
})
export class ToolboxModule { }
