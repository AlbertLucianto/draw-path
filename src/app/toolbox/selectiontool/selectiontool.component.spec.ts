import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionToolComponent } from './selectiontool.component';

describe('SelectiontoolComponent', () => {
	let component: SelectionToolComponent;
	let fixture: ComponentFixture<SelectionToolComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ SelectionToolComponent ],
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SelectionToolComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
