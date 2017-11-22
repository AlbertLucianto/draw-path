import { dispatch, select$ } from '@angular-redux/store';
import { ChangeDetectionStrategy,
	Component,
	ElementRef,
	Input,
	OnInit,
	Renderer2,
	ViewChild,
	ViewEncapsulation,
} from '@angular/core';
import { List } from 'immutable';
import 'rxjs/add/operator/filter';
import { Observable } from 'rxjs/Observable';

import { BaseAnchor } from '../anchor/anchor.model';
import { Position, RegisteredListener } from '../canvas.model';
import { DrawableBaseComponent } from '../drawable/drawable.base.component';
import { Path } from '../path/path.model';

const filterListener = (listeners$: Observable<List<RegisteredListener>>) =>
	listeners$.map(listeners => <List<RegisteredListener>>listeners
		.filter(listener => listener.target === 'anchor'));

@Component({
	selector: 'app-anchor',
	templateUrl: './anchor.component.html',
	styleUrls: ['./anchor.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnchorComponent extends DrawableBaseComponent implements OnInit {
	listeners: Array<Function> = [];
	@ViewChild('anchor') anchorRef: ElementRef;
	@Input() drawable: BaseAnchor;
	@select$(['toolbox', 'selected', 'listeners'], filterListener)	readonly listeners$: Observable<List<RegisteredListener>>;

	constructor(
		private rd: Renderer2,
	) { super(); }

	get style() {
		return {
			transform: this.drawable.toTransform(),
		};
	}

	ngOnInit() {
		// Attach listeners as dictated by toolbox
		this.listeners$.subscribe(listeners => {
			// clear listener from pevious tool
			this.listeners.forEach((listenerToDestroy: Function) => listenerToDestroy());
			listeners.forEach(listener => {
				this.listeners.push(this.rd.listen(this.anchorRef.nativeElement, listener.name,
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

}
