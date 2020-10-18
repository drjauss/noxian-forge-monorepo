import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home-page.module').then((m) => m.HomePageModule),
  },
  {
    path: 'coaching',
    loadChildren: () =>
      import('./pages/coaching/coaching-page.module').then(
        (m) => m.CoachingPageModule
      ),
  },
  {
    path: 'guides',
    loadChildren: () =>
      import('./pages/guides/guides-page.module').then(
        (m) => m.GuidesPageModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about-page.module').then((m) => m.AboutPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
