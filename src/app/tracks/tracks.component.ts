import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Track } from '../shared/models/track.model';
import { TrackService } from '../shared/services/track.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogTrackDeleteComponent } from '../layout/dialog-track-delete/dialog-track-delete.component';


@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {
  tracks: Observable<Track[]>;
  track: Track;
  @Input() searchModel: string;

  constructor(
    private _trackservice: TrackService,
    public dialog: MatDialog
  ) {
    this.tracks = this._trackservice.getTracks();
   }

  ngOnInit() {
    this.tracks = this._trackservice.getTracks();
  }
  deleteDialog(trackId = null) {
    const dialogRef = this.dialog.open(DialogTrackDeleteComponent, {
      data: trackId
    });
  }
}
