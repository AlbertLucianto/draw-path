import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CanvasComponent } from './canvas.component';
import { GroupComponent } from './group/group.component';
import { PathComponent } from './path/path.component';
import { DrawableComponent } from './drawable/drawable.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [PathComponent, GroupComponent, CanvasComponent, DrawableComponent],
	exports: [CanvasComponent],
})
export class CanvasModule { }
