import {
	AfterViewInit,
	Component,
	ComponentFactoryResolver,
	ComponentRef,
	Input,
	OnDestroy,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';

import { PenToolComponent } from '../pentool/pentool.component';
import { SelectionToolComponent } from '../selectiontool/selectiontool.component';
import { ToolName } from '../toolbox.model';
import { IToolContext, ToolBaseComponent } from './tool.base.component';
import { ToolDirective } from './tool.directive';

const mappings = {
	[ToolName.PenTool]: PenToolComponent,
	[ToolName.SelectionTool]: SelectionToolComponent,
};

const getComponentType = (typeName: ToolName) => {
	const type = mappings[typeName];
	return type;
};

@Component({
	selector: 'app-tool-container',
	templateUrl: './tool.container.component.html',
	styleUrls: ['./tool.container.component.scss'],
})
export class ToolContainerComponent implements AfterViewInit, OnDestroy {
	componentRef: ComponentRef<ToolBaseComponent>;
	instance: ToolBaseComponent;
	@ViewChild(ToolDirective, { read: ViewContainerRef }) toolHost: ViewContainerRef;
	@Input() context: IToolContext;
	@Input() type: ToolName;

	constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

	ngAfterViewInit() {
		if (this.type) {
			const componentType = getComponentType(this.type);
			const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
			this.componentRef = this.toolHost.createComponent(factory);
			this.instance = <ToolBaseComponent>this.componentRef.instance;
			this.instance.context = this.context;
		}
	}

	ngOnDestroy() {
		if (this.componentRef) {
			this.componentRef.destroy();
			this.componentRef = null;
		}
	}
}
