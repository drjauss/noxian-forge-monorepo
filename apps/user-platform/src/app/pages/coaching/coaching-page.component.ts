import { Component } from '@angular/core';
import { TemplateObj } from '../../models/templates/template-obj.model';
import { CoachingPageContentWrapperComponent } from './coaching-page-content-wrapper/coaching-page-content-wrapper.component';

@Component({
  selector: 'app-coaching-page',
  template: `<app-default-template
    [templateObj]="templateObj"
  ></app-default-template>`,
})
export class CoachingPageComponent {
  templateObj: TemplateObj = {
    data: null,
    component: CoachingPageContentWrapperComponent,
  };
}
