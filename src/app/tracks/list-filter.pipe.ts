import { Pipe, PipeTransform } from '@angular/core';
import { Track } from '../shared/models/track.model';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Pipe({
  name: 'listFilter'
})
export class ListFilterPipe implements PipeTransform {
  tracks: Observable<Track>;
  track: Track;
  transform(list: Observable<Track>, filterText: string): Observable<Track> {
    return list ? list.filter(item => item.name.search(new RegExp(filterText, 'i')) > -1) : [];
  }
  // transform(list: Observable<Track>, filterText: string): Observable<Track> {
  //   return list ? list.pipe(
  //     filter(list => list.name = name).subscribe(() => {

  //     })
  //   );
  // }
// transform(items: any[], searchText: string): any[] {
  //   if (!items) {
  //     return [];
  //   }
  //   if (!searchText) {
  //     return items;
  //   }
  //   searchText = searchText.toLocaleLowerCase();

  //   return items.filter(it => {
  //     return it.toLocaleLowerCase().includes(searchText);
  //   });
//   // }
//   transform(items: Observable<Track>, filter: string): Observable<Track> {
//     if (items) {
//         const regexp = new RegExp(`.*${filter}.*`, 'i');
//         return items.filter(b => regexp.test(b.volumeInfo.title));
        
//     }
//     return items;
// }
}
