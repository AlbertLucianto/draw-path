import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AnchorComponent } from './anchor/anchor.component';
import { CanvasComponent } from './canvas.component';
import { DrawableComponent } from './drawable/drawable.component';
import { DrawableDirective } from './drawable/drawable.directive';
import { GroupComponent } from './group/group.component';
import { PathComponent } from './path/path.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		AnchorComponent,
		PathComponent,
		GroupComponent,
		CanvasComponent,
		DrawableComponent,
		DrawableDirective,
	],
	entryComponents: [
		GroupComponent,
		PathComponent,
		AnchorComponent,
	],
	exports: [
		CanvasComponent,
	],
})
export class CanvasModule { }
