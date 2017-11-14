import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenToolComponent } from './pentool.component';

describe('PenToolComponent', () => {
	let component: PenToolComponent;
	let fixture: ComponentFixture<PenToolComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ PenToolComponent ],
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PenToolComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
