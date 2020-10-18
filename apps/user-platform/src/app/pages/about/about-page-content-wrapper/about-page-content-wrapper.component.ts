import { Component } from '@angular/core';
import { TemplateWrapper } from '../../../models/templates/template-wrapper.model';

@Component({
  selector: 'app-about-page-content-wrapper',
  templateUrl: './about-page-content-wrapper.component.html',
  styleUrls: ['./about-page-content-wrapper.component.scss'],
})
export class AboutPageContentWrapperComponent implements TemplateWrapper {
  data: any;
}
