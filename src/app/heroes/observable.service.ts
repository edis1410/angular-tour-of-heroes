import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Injectable({
  providedIn: 'root',
})
export class ObservableService {
  private heroesSubject$: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>([]);

  private heroes$: Observable<Hero[]> = this.heroesSubject$.asObservable();

  constructor(private heroService: HeroService) {
    this.heroService.getHeroes().subscribe((heroes)=>this.heroesSubject$.next(heroes));
  }
  public getHeroes$(): Observable<Hero[]>{
      return this.heroes$;
  }

  public addHeroes(hero: Hero): void{
    const currentHeroes = this.heroesSubject$.value;
    const newHeroes = [...currentHeroes, hero]
    this.heroesSubject$.next(newHeroes);
  }
  public deleteHeroes(hero: Hero): void{
    const currentHeroes = this.heroesSubject$.value;
    const newHeroes = currentHeroes.filter((h)=>h.id !== hero.id);
    this.heroesSubject$.next(newHeroes);
  }
}
