import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderSectionComponent } from './header-section.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderSectionComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderSectionComponent],
})
export class HeaderSectionModule {}
