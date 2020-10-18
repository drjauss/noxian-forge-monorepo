import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { TemplatesModule } from '../../templates/templates.module';

import { CoachingPageComponent } from './coaching-page.component';
import { CoachingPageContentWrapperComponent } from './coaching-page-content-wrapper/coaching-page-content-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: CoachingPageComponent,
  },
];

@NgModule({
  declarations: [CoachingPageComponent, CoachingPageContentWrapperComponent],
  imports: [RouterModule.forChild(routes), TemplatesModule, ComponentsModule],
})
export class CoachingPageModule {}
