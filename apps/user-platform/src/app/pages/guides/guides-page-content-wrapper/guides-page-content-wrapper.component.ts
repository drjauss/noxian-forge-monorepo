import { Component } from '@angular/core';
import { TemplateWrapper } from '../../../models/templates/template-wrapper.model';

@Component({
  selector: 'app-guides-page-content-wrapper',
  templateUrl: './guides-page-content-wrapper.component.html',
  styleUrls: ['./guides-page-content-wrapper.component.scss'],
})
export class GuidesPageContentWrapperComponent implements TemplateWrapper {
  data: any;
}
