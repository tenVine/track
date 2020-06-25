import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TracksComponent } from './tracks/tracks.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    TracksComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
