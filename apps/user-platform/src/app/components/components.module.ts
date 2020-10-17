import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from './banner/banner.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GuidesFeedComponent } from './guides-feed/guides-feed.component';

@NgModule({
  declarations: [BannerComponent, CarouselComponent, GuidesFeedComponent],
  imports: [CommonModule],
  exports: [BannerComponent, CarouselComponent, GuidesFeedComponent],
})
export class ComponentsModule {}
