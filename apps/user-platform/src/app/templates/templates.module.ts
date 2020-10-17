import { NgModule } from '@angular/core';

import { DefaultTemplateModule } from './default/default-template.component.module';

@NgModule({
  imports: [DefaultTemplateModule],
  exports: [DefaultTemplateModule],
})
export class TemplatesModule {}
