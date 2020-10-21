import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from './banner/banner.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GuidesFeedComponent } from './guides-feed/guides-feed.component';
import { GuidesGridComponent } from './guides-grid/guides-grid.component';

@NgModule({
  declarations: [
    BannerComponent,
    CarouselComponent,
    GuidesFeedComponent,
    GuidesGridComponent,
  ],
  imports: [CommonModule],
  exports: [
    BannerComponent,
    CarouselComponent,
    GuidesFeedComponent,
    GuidesGridComponent,
  ],
})
export class ComponentsModule {}
