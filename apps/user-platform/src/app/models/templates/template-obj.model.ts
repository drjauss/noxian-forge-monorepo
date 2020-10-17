import { ElementRef, TemplateRef } from '@angular/core';

export interface TemplateObj {
  component?: any;
  data: any;
  template?: TemplateRef<ElementRef>;
}
