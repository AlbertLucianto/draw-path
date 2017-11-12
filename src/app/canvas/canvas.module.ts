import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CanvasComponent } from './canvas.component';
import { GroupComponent } from './group/group.component';
import { PathComponent } from './path/path.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [PathComponent, GroupComponent, CanvasComponent],
	exports: [CanvasComponent],
})
export class CanvasModule { }
