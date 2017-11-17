import { AfterViewInit, Component, Input, ViewEncapsulation } from '@angular/core';
import { BaseAnchor } from '../anchor/anchor.model';
import { DrawableBaseComponent } from '../drawable/drawable.base.component';

@Component({
	selector: 'app-anchor',
	templateUrl: './anchor.component.html',
	styleUrls: ['./anchor.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class AnchorComponent extends DrawableBaseComponent implements AfterViewInit {
	@Input() drawable: BaseAnchor;
	get style() {
		const { x, y } = this.drawable.absPosition;
		return {
			transform: `translate(${x}px, ${y}px)`,
		};
	}
	ngAfterViewInit() { }

}
