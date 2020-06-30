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
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';

import { DialogTrackComponent } from './dialog-track/dialog-track.component';
// import {MatDialog} from "@angular/material/dialog";

// import { DialogNewTrackComponent } from './layout/dialog/dialog-new-track/dialog-new-track.component';

@NgModule({
  declarations: [
    AppComponent,
    TracksComponent,
    MapComponent,
    DialogTrackComponent,
    // DialogNewTrackComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    GoogleMapsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogTrackComponent]
})
export class AppModule { }
