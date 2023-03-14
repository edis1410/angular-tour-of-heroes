import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person } from './person';
import { StarWarsApiService } from './star-wars-api.service';

@Injectable({
  providedIn: 'root'
})
export class StarWarsFacadeService {
  private peopleSubject$: BehaviorSubject<Person[]> = new BehaviorSubject<Person[]>([]);

  private people$: Observable<Person[]> = this.peopleSubject$.asObservable();
    
  constructor(private sws: StarWarsApiService) {
    this.sws.getPeople().subscribe((people)=>this.peopleSubject$.next(people));
  }

    public getPeople$(): Observable<Person[]>{
      return this.people$;
  }
}
