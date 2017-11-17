import { select, WithSubStore } from '@angular-redux/store';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { canvasReducer } from './canvas.reducer';
import { Drawable } from './drawable/drawable.model';

@WithSubStore({
	basePathMethodName: 'getSubPath',
	localReducer: canvasReducer,
})
@Component({
	selector: 'app-draw-canvas',
	templateUrl: './canvas.component.html',
	styleUrls: ['./canvas.component.scss'],
	encapsulation: ViewEncapsulation.Emulated,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CanvasComponent implements OnInit {
	@select('root')		readonly root$: Observable<Array<Drawable>>;

	constructor() { }

	ngOnInit() {
		this.root$.subscribe(val => console.log(val));
	}

	getSubPath = () => ['canvas'];

}
