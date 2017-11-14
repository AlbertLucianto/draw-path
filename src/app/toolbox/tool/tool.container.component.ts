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
import { SelectiontoolComponent } from '../selectiontool/selectiontool.component';
import { ToolBase } from './tool.base.component';
import { ToolDirective } from './tool.directive';

const mappings = {
	pentool: PentoolComponent,
	selectiontool: SelectiontoolComponent,
};

const getComponentType = (typeName: string) => {
	const type = mappings[typeName];
	return type;
};

@Component({
	selector: 'app-tool-container',
	templateUrl: './tool.container.component.html',
	styleUrls: ['./tool.container.component.scss'],
})
export class ToolContainerComponent implements OnInit, OnDestroy {
	componentRef: ComponentRef<Object>;
	@ViewChild(ToolDirective, { read: ViewContainerRef }) toolHost: ViewContainerRef;
	@Input() context: any;
	@Input() type: string;
	constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
	ngOnInit() {
		if (this.type) {
			const componentType = getComponentType(this.type);
			const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
			this.componentRef = this.toolHost.createComponent(factory);
			const instance = <ToolBase>this.componentRef.instance;
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
