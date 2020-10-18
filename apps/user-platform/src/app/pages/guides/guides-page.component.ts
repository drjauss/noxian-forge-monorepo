import { Component } from '@angular/core';
import { TemplateObj } from '../../models/templates/template-obj.model';
import { GuidesPageContentWrapperComponent } from './guides-page-content-wrapper/guides-page-content-wrapper.component';

@Component({
  selector: 'app-guides-page',
  template: `<app-default-template
    [templateObj]="templateObj"
  ></app-default-template>`,
})
export class GuidesPageComponent {
  templateObj: TemplateObj = {
    data: null,
    component: GuidesPageContentWrapperComponent,
  };
}
