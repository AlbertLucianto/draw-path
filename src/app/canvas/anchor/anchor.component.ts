import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DrawableBaseComponent } from '../drawable/drawable.base.component';
import { Drawable } from '../drawable/drawable.model';

@Component({
	selector: 'app-anchor',
	templateUrl: './anchor.component.html',
	styleUrls: ['./anchor.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class AnchorComponent implements OnInit, DrawableBaseComponent {
	drawable: Drawable;

	ngOnInit() {
	}

}
