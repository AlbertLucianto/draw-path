import {
	Component,
	ComponentFactoryResolver,
	ComponentRef,
	Input,
	OnDestroy,
	OnInit,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';

import { PentoolComponent } from '../pentool/pentool.component';
import { ToolBase } from './tool.base.component';

const mappings = {
	pentool: PentoolComponent,
};

const getComponentType = (typeName: string) => {
	const type = mappings[typeName];
	return type;
};

@Component({
	selector: 'app-tool-container',
	templateUrl: './tool.container.component.html',
})
export class ToolContainerComponent implements OnInit, OnDestroy {
	private componentRef: ComponentRef<Object>;
	@ViewChild('baseContainer', { read: ViewContainerRef }) container: ViewContainerRef;
	@Input() context: any;
	@Input() type: string;
	constructor(private componentFactoryResolver: ComponentFactoryResolver) {}
	ngOnInit() {
		if (this.type) {
			const componentType = getComponentType(this.type);
			const factory = this.componentFactoryResolver.resolveComponentFactory(PentoolComponent);
			this.componentRef = this.container.createComponent(factory);
			const instance = <ToolBase> this.componentRef.instance;
			instance.context = this.context;
		}
	}
	ngOnDestroy() {
		if (this.componentRef) {
			this.componentRef.destroy();
			this.componentRef = null;
		}
	}
}
