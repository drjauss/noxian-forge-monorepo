import { Component } from '@angular/core';
import { TemplateWrapper } from '../../../models/templates/template-wrapper.model';

@Component({
  selector: 'app-home-page-content-wrapper',
  templateUrl: './home-page-content-wrapper.component.html',
  styleUrls: ['./home-page-content-wrapper.component.scss'],
})
export class HomePageContentWrapperComponent implements TemplateWrapper {
  data: any;
}
