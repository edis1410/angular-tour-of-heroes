import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  heroes$: Observable<Hero[]> = this.heroService.getHeroes().pipe(
    map((heroes: Hero[]) => heroes.slice(1,6))
    );

  constructor(private heroService: HeroService) {}

}
