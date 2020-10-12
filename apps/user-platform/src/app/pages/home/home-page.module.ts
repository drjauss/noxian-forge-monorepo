import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultTemplateComponent } from '../../templates/default/default-template.component';
import { DefaultTemplateModule } from '../../templates/default/default-template.module';

const routes: Routes = [
  {
    path: '',
    component: DefaultTemplateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), DefaultTemplateModule],
})
export class HomePageModule {}
