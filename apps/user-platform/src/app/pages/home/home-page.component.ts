import { Component } from '@angular/core';
import { TemplateObj } from '../../models/templates/template-obj.model';
import { HomePageContentWrapperComponent } from './home-page-content-wrapper/home-page-content-wrapper.component';

@Component({
  selector: 'app-home-page',
  template: `<app-default-template
    [templateObj]="templateObj"
  ></app-default-template>`,
})
export class HomePageComponent {
  templateObj: TemplateObj = {
    data: null,
    component: HomePageContentWrapperComponent,
  };
}
