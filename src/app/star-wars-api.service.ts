import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { MessageService } from './message.service';
import { Person } from './person';
import { StarWarsApiResponse } from './star-wars-api-response';

@Injectable({
  providedIn: 'root',
})
export class StarWarsApiService {
  private apiURL = 'https://swapi.dev/api/people';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  private log(message: string) {
    this.messageService.add(`swaService: ${message}`);
  }

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
  ) {}

  getPeople(): Observable<Person[]> {
    return this.httpClient.get<StarWarsApiResponse>(this.apiURL).pipe(
      map((data: StarWarsApiResponse) =>
        data.results.map((person: Person) => ({
          name: person.name,
          height: person.height,
          mass: person.mass,
        }))
      ),
      tap((_) => this.log('fetched people')),
      catchError(this.handleError<Person[]>('getPeople', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
