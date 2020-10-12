import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultTemplateComponent } from './default-template.component';

@NgModule({
  declarations: [DefaultTemplateComponent],
  imports: [CommonModule],
  exports: [DefaultTemplateComponent],
})
export class DefaultTemplateModule {}
