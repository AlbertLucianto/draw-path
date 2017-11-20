import { dispatch, select, select$ } from '@angular-redux/store';
import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	OnInit,
	Renderer2,
	ViewChild,
	ViewEncapsulation,
} from '@angular/core';
import { List } from 'immutable';
import 'rxjs/add/operator/filter';
import { Observable } from 'rxjs/Observable';

import { CanvasActions } from './canvas.action';
import { Position, RegisteredListener } from './canvas.model';
import { Drawable } from './drawable/drawable.model';
import { Path } from './path/path.model';

const filterListener = (listeners$: Observable<List<RegisteredListener>>) =>
	listeners$.map(listeners => <List<RegisteredListener>>listeners
		.filter(listener => listener.target === 'canvas'));

@Component({
	selector: 'app-draw-canvas',
	templateUrl: './canvas.component.html',
	styleUrls: ['./canvas.component.scss'],
	encapsulation: ViewEncapsulation.Emulated,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CanvasComponent implements OnInit {
	listeners: Array<Function> = [];
	@ViewChild('canvas') canvasRef: ElementRef;
	@select(['canvas', 'root'])																			readonly root$: Observable<List<Drawable>>;
	@select$(['toolbox', 'selected', 'listeners'], filterListener)	readonly listeners$: Observable<List<RegisteredListener>>;

	constructor(
		private rd: Renderer2,
		private canvasActions: CanvasActions) { }

	ngOnInit() {
		// Update canvas board state and listen on change window size
		this.updateCanvasPosition();
		this.rd.listen('window', 'resize', (_e) => { this.updateCanvasPosition(); });

		this.listeners$.subscribe(listeners => {
			// clear listener from pevious tool
			this.listeners.forEach((listenerToDestroy: Function) => listenerToDestroy());
			listeners.forEach(listener => {
				this.listeners.push(this.rd.listen(this.canvasRef.nativeElement, listener.name,
					(e: MouseEvent) => this.dispatchRegisteredAction(listener.handler, e),
				));
			});
		});
	}

	@dispatch() dispatchRegisteredAction = (handler: Function, e: MouseEvent) => {
		return handler(e, new Path({
			routeParentPath: List([]),
			idx: 0,
			absPosition: new Position({ x: 0, y: 0 }),
		})); // Still hardcoded, update later when there is 'selectedDrawable' state
	}

	@dispatch() updateCanvasPosition = () => {
		return this.canvasActions.updatePosition({
			x: this.canvasRef.nativeElement.getBoundingClientRect().left,
			y: this.canvasRef.nativeElement.getBoundingClientRect().top,
		});
	}
}
