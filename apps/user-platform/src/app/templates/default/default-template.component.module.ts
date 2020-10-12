import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultTemplateComponent } from './default-template.component';

import { HeaderSectionModule } from '../../sections/header/header-section.component.module';
import { FooterSectionModule } from '../../sections/footer/footer-section.component.module';

@NgModule({
  declarations: [DefaultTemplateComponent],
  imports: [CommonModule, HeaderSectionModule, FooterSectionModule],
  exports: [DefaultTemplateComponent],
})
export class DefaultTemplateModule {}
