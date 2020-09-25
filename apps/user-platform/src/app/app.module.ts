import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NoxianCarrouselComponent } from './noxian-carrousel/noxian-carrousel.component';
import { FeaturedContentComponent } from './featured-content/featured-content.component';
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [AppComponent, NoxianCarrouselComponent, FeaturedContentComponent],
  imports: [BrowserModule, NgbModule,FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
