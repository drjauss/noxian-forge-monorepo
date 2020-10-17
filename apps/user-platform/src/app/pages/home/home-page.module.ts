import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';

import { TemplatesModule } from '../../templates/templates.module';

import { HomePageContentWrapperComponent } from './home-page-content-wrapper/home-page-content-wrapper.component';
import { HomePageComponent } from './home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  declarations: [HomePageComponent, HomePageContentWrapperComponent],
  imports: [RouterModule.forChild(routes), TemplatesModule, ComponentsModule],
})
export class HomePageModule {}
