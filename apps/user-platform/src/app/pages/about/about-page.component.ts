import { Component } from '@angular/core';
import { TemplateObj } from '../../models/templates/template-obj.model';
import { AboutPageContentWrapperComponent } from './about-page-content-wrapper/about-page-content-wrapper.component';

@Component({
  selector: 'app-about-page',
  template: `<app-default-template
    [templateObj]="templateObj"
  ></app-default-template>`,
})
export class AboutPageComponent {
  templateObj: TemplateObj = {
    data: null,
    component: AboutPageContentWrapperComponent,
  };
}
