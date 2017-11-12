import { NgReduxModule } from '@angular-redux/store';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CanvasModule } from './canvas/canvas.module';
import { StoreModule } from './store/store.module';
import { ToolboxModule } from './toolbox/toolbox.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		NgReduxModule,
		AppComponent,
		CanvasModule,
		StoreModule,
		ToolboxModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
