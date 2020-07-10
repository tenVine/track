import { Component, OnInit, Inject } from '@angular/core';
import { Track } from 'src/app/shared/models/track.model';
import { TrackService } from 'src/app/shared/services/track.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-track-delete',
  templateUrl: './dialog-track-delete.component.html',
  styleUrls: ['./dialog-track-delete.component.scss']
})
export class DialogTrackDeleteComponent implements OnInit {
  track: Track;
  constructor(
    private _trackService: TrackService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }
  onDelete() {
    this._trackService.deleteTrack(this.data);
  }
}
