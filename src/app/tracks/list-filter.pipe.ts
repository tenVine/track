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
  transform(list: any, filterText: string): any {
    return list ? list.filter(item => item.name.search(new RegExp(filterText, 'i')) > -1) : [];
  }

}
