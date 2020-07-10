import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import { DialogTrackComponent } from './dialog-track/dialog-track.component';
import { Track } from './shared/models/track.model';
import { Observable } from 'rxjs';
import { TrackService } from './shared/services/track.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Input() searchModel;
  @Output() searchModelChange: EventEmitter<any> = new EventEmitter();
  track: Track;
  tracks: Observable<Track[]>;
  title = 'track';
  value = 'Clear me';
  constructor(
    private _trackService: TrackService,
    public dialog: MatDialog) {}

  ngOnInit() {
    this.tracks = this._trackService.getTracks();
  }
  openDialog(trackId = null) {
    const dialogRef = this.dialog.open(DialogTrackComponent, {
      data: trackId
    });

  }
  updateSearchModel(value) {
    this.searchModel = value;
    this.searchModelChange.emit(this.searchModel);
  }
}
