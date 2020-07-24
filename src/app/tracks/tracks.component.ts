import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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
  tracks;
  track: Track;
  @Input() searchModel: string;
  startAt = new Subject();
  endAt = new Subject();

  constructor(
    private _trackservice: TrackService,
    public dialog: MatDialog
  ) {
    this.tracks = this._trackservice.getTracks();
   }

  ngOnInit() {
    this._trackservice.getTrack_2(this.startAt, this.endAt)
          .subscribe(tracks => this.tracks = tracks);
  }

  search($event) {
    let q = $event.target.value;
    this.startAt.next(q);
    this.endAt.next(q+"\uf8ff");
  }
  deleteDialog(trackId = null) {
    const dialogRef = this.dialog.open(DialogTrackDeleteComponent, {
      data: trackId
    });
  }
}
