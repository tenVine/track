import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import { DialogTrackComponent } from './dialog-track/dialog-track.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'track';
  value = 'Clear me';
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogTrackComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
