import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TracksComponent } from './tracks/tracks.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MapComponent } from './map/map.component';

import { GoogleMapsModule } from '@angular/google-maps';

import { FormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    TracksComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    GoogleMapsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
