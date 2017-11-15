import {
	AfterViewInit,
	Component,
	ComponentFactoryResolver,
	ComponentRef,
	Input,
	OnDestroy,
	ViewChild,
	ViewContainerRef,
	ViewEncapsulation,
} from '@angular/core';

import { AnchorComponent } from '../anchor/anchor.component';
import { PathComponent } from '../path/path.component';
import { DrawableBaseComponent } from './drawable.base.component';
import { DrawableType } from './drawable.constant';
import { DrawableDirective } from './drawable.directive';
import { Drawable } from './drawable.model';

const mappings = {
	[DrawableType.Anchor]: AnchorComponent,
	[DrawableType.Path]: PathComponent,
};

const getComponentType = (typeName: DrawableType) => {
	const type = mappings[typeName];
	return type;
};

@Component({
	selector: 'app-drawable',
	templateUrl: './drawable.component.html',
	styleUrls: ['./drawable.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class DrawableComponent implements AfterViewInit, OnDestroy {
	componentRef: ComponentRef<DrawableBaseComponent>;
	instance: Drawable;
	@ViewChild(DrawableDirective, { read: ViewContainerRef }) drawableHost: ViewContainerRef;
	@Input() drawable: Drawable;
	@Input() type: DrawableType;

	constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

	ngAfterViewInit() {
		if (this.drawable.type) {
			const drawableType = getComponentType(this.drawable.type);
			const factory = this.componentFactoryResolver.resolveComponentFactory(drawableType);
			this.componentRef = this.drawableHost.createComponent(factory);
			const instance = this.componentRef.instance;
			instance.drawable = this.drawable;
		}
	}

	ngOnDestroy() {
		if (this.componentRef) {
			this.componentRef.destroy();
			this.componentRef = null;
		}
	}

}
