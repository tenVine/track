import {Component, Inject, ViewChild, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Track } from '../shared/models/track.model';
import { TrackService } from '../shared/services/track.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-track',
  templateUrl: './dialog-track.component.html',
  styleUrls: ['./dialog-track.component.scss']
})
export class DialogTrackComponent implements OnInit {
  trackForm: FormGroup;
  track: Track;
  @ViewChild('resetTrackForm', { static: false }) myNgForm;

  constructor(
    private _trackService: TrackService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  
  ngOnInit() {
    if(this.data != null) {
      this._trackService.getTrack(this.data).subscribe((track: Track) => {
        this.track = track;
        this.onSubmitTrack();
      })
    } else {
      this.onSubmitTrack();
      this.track = this.trackForm.value;
    }
  }
  onSubmit() {
    if(this.trackForm.valid) {
      this._trackService.addTrack(this.trackForm.value);
      this.resetForm();
    }
  }
  onSubmitTrack() {
    let trackName = '';
    let trackLat: number;
    let trackLon: number;

    this.trackForm = this.fb.group({
      name: [trackName, [Validators.required]],
      lat: [trackLat, [Validators.required]],
      lon: [trackLon, [Validators.required]]
    });
  }
  public handleError = (controlName: string, errorName: string) => {
    return this.trackForm.controls[controlName].hasError(errorName);
  }

  resetForm() {
    this.trackForm.reset();
    Object.keys(this.trackForm.controls).forEach(key => {
      this.trackForm.controls[key].setErrors;
    });
  }  
}
