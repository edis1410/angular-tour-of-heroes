import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StarWarsFacadeService } from '../star-wars-facade.service';
import { Person } from '../person';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.css'],
})
export class StarWarsComponent {
  public people$: Observable<Person[]> = this.swfs.getPeople$();

  constructor(private swfs: StarWarsFacadeService) {}
  
}
