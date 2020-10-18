import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';

import { TemplatesModule } from '../../templates/templates.module';
import { GuidesPageContentWrapperComponent } from './guides-page-content-wrapper/guides-page-content-wrapper.component';

import { GuidesPageComponent } from './guides-page.component';

const routes: Routes = [
  {
    path: '',
    component: GuidesPageComponent,
  },
];

@NgModule({
  declarations: [GuidesPageComponent, GuidesPageContentWrapperComponent],
  imports: [RouterModule.forChild(routes), TemplatesModule, ComponentsModule],
})
export class GuidesPageModule {}
