import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { TemplatesModule } from '../../templates/templates.module';

import { AboutPageComponent } from './about-page.component';
import { AboutPageContentWrapperComponent } from './about-page-content-wrapper/about-page-content-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: AboutPageComponent,
  },
];

@NgModule({
  declarations: [AboutPageComponent, AboutPageContentWrapperComponent],
  imports: [RouterModule.forChild(routes), TemplatesModule, ComponentsModule],
})
export class AboutPageModule {}
