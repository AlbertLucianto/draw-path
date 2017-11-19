import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AnchorComponent } from './anchor/anchor.component';
import { CanvasActions } from './canvas.action';
import { CanvasComponent } from './canvas.component';
import { DrawableComponent } from './drawable/drawable.component';
import { DrawableDirective } from './drawable/drawable.directive';
import { GroupComponent } from './group/group.component';
import { PathActions } from './path/path.action';
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
	providers: [
		PathActions,
		CanvasActions,
	],
	exports: [
		CanvasComponent,
	],
})
export class CanvasModule { }
