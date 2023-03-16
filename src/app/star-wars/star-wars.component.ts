import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable, scan } from 'rxjs';
import { StarWarsFacadeService } from '../star-wars-facade.service';
import { Person } from '../person';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.css'],
})
export class StarWarsComponent {
  public people$: Observable<Person[]> = this.swfs.getPeople$();

  sortedColumn$ = new BehaviorSubject<string>('');

  constructor(private swfs: StarWarsFacadeService) {
    this.people$ = combineLatest([
      this.swfs.getPeople$(),
      this.sortDirection$,
    ]).pipe(
      map(([list, sort]) =>
        !sort.col ? list : this.sortByColumn(list, sort.col, sort.dir)
      )
    );
  }

  sortDirection$ = this.sortedColumn$.pipe(
    scan<string, { col: string; dir: string }>(
      (sort, val) => {
        return sort.col === val
          ? { col: val, dir: sort.dir === 'desc' ? 'asc' : 'desc' }
          : { col: val, dir: 'desc' };
      },
      { dir: 'desc', col: '' }
    )
  );

  sortByColumn(
    list: any[],
    column: string,
    direction = 'desc'
  ): any[] {
      let sortedArray = (list || []).sort((a, b) => {
        if(Number(a[column])){
          return direction === 'desc' ? a[column] - b[column] : b[column] - a[column];
        }
        else if (a[column] > b[column]) {
          return direction === 'desc' ? 1 : -1;
        }
        else if (a[column] < b[column]) {
          return direction === 'desc' ? -1 : 1;
        }
        return 0;
      });
      return sortedArray;
  }

  sortOn(column: string) {
    this.sortedColumn$.next(column);
  }
}
