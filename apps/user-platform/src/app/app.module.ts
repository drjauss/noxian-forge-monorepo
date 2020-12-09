import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { FacadesModule } from './services/facades/facades.module';
import { FirestoreModule } from './services/firestore/firestore.module';
import { ComponentsModule } from './components/components.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    AngularFireModule.initializeApp(environment.firebase),
    FirestoreModule,
    FacadesModule,
  ],
})
export class AppModule {}
