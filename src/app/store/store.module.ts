import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { NgModule } from '@angular/core';

import { IAppState } from './model';
import { rootReducer } from './reducer';

@NgModule({
	imports: [
		NgReduxModule,
	],
	declarations: [],
})
export class StoreModule {
	constructor(
		public store: NgRedux<IAppState>,
		devTools: DevToolsExtension,
	) {
		store.configureStore(
			rootReducer,
			{},
			[],
			devTools.isEnabled() ? [ devTools.enhancer() ] : []);
	}
}
