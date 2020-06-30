import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Track } from '../models/track.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  constructor() { }
}
