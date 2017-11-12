import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-path',
	templateUrl: './path.component.html',
	styleUrls: ['./path.component.css'],
	encapsulation: ViewEncapsulation.Emulated, // default
	// about encapsulation: angular-2-training-book.rangle.io/handout/advanced-components/view_encapsulation.html
})
export class PathComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
