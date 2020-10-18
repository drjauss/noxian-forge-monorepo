import { Component } from '@angular/core';
import { TemplateWrapper } from '../../../models/templates/template-wrapper.model';

@Component({
  selector: 'app-coaching-page-content-wrapper',
  templateUrl: './coaching-page-content-wrapper.component.html',
  styleUrls: ['./coaching-page-content-wrapper.component.scss'],
})
export class CoachingPageContentWrapperComponent implements TemplateWrapper {
  data: any;
}
