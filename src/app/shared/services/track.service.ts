import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Track } from '../models/track.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  track: Track;

  constructor(
    private _firestore: AngularFirestore,
    private db: AngularFireDatabase
  ) { }

  addTrack(track: Track) {
    return this._firestore.collection<Track>('tracks').add(track);
  }

  getTracks() {
    return this._firestore.collection('tracks', ref => ref)
    .snapshotChanges().pipe(map(actions => {
      return actions.map(action => {
        const track = action.payload.doc.data() as Track;
        track.id = action.payload.doc.id;
        return track;
      })
    }))
  }

  getTrack_2(start, end): AngularFireList<any> {
    return this.db.list('/tracks', ref => {
      return ref.orderByChild('name').limitToFirst(10).startAt(start).endAt(end);
    });
  }

  getTrack(id) {
    return this._firestore.collection<Track>('tracks').doc(id).valueChanges();
  }

  deleteTrack(record_id) {
    this._firestore.doc('tracks/' + record_id).delete();
  }

  updateTrack(id, track: Track) {
    return this._firestore.collection<Track>('tracks').doc(id).set(track);
  }

  
}
