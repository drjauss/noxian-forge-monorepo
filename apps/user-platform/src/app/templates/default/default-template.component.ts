import {
  AfterViewInit,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { TemplateWrapperComponent } from '../../components/template-wrapper/template-wrapper.component';

import { TemplateObj } from '../../models/templates/template-obj.model';

@Component({
  selector: 'app-empty-template',
  template: ``,
})
class EmptyComponent {}

@Component({
  selector: 'app-default-template',
  templateUrl: './default-template.component.html',
  styleUrls: ['./default-template.component.scss'],
})
export class DefaultTemplateComponent implements AfterViewInit {
  @Input() templateObj: TemplateObj = { component: EmptyComponent, data: null };

  @ViewChild('templateHost', { read: ViewContainerRef })
  templateHostRef: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    this.loadComponent();
  }

  loadComponent() {
    const currentTemplate = this.templateObj;

    const componentFactory: ComponentFactory<TemplateWrapperComponent> = this.componentFactoryResolver.resolveComponentFactory(
      currentTemplate.component
    );
    const viewContainerRef = this.templateHostRef;
    const componentRef = viewContainerRef.createComponent<
      TemplateWrapperComponent
    >(componentFactory);

    componentRef.instance.data = currentTemplate.data;
    componentRef.changeDetectorRef.detectChanges();
  }
}
