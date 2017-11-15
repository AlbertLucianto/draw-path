import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DrawableBaseComponent } from '../drawable/drawable.base.component';
import { Drawable } from '../drawable/drawable.model';

@Component({
	selector: 'app-path',
	templateUrl: './path.component.html',
	styleUrls: ['./path.component.scss'],
	encapsulation: ViewEncapsulation.Emulated, // default
	// about encapsulation: angular-2-training-book.rangle.io/handout/advanced-components/view_encapsulation.html
})
export class PathComponent implements OnInit, DrawableBaseComponent {
	drawable: Drawable;

	ngOnInit() {
	}

}
