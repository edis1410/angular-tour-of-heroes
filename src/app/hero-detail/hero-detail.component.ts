import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
})
export class HeroDetailComponent {
  hero$: Observable<Hero> = this.route.params.pipe(
    switchMap((params: Params) => this.heroService.getHero(params['id']))
  );

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  goBack(): void {
    this.location.back();
  }

  // save(): void {
  //   if (this.hero) {
  //     this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  //   }
  // }
}
