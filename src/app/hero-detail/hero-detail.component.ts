import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { Observable, switchMap, tap } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit{
  hero$: Observable<Hero> = this.route.params.pipe(
    switchMap((params: Params) => this.heroService.getHero(params['id']))
  );
  
    public heroDetailForm = this.fb.group({
    id: this.fb.control<number | null>(null),
    name: this.fb.control<string | null>(null, [Validators.required]),
    age: this.fb.control<number | null>(null, [
      Validators.min(0),
      Validators.pattern('^[0-9]*$'),
    ]),
  });

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private fb: FormBuilder
  ) {}
  
  ngOnInit(): void {
    this.heroDetailForm.get('id')?.setValue(1);
    this.heroDetailForm.get('name')?.setValue('neki');
    this.heroDetailForm.get('age')?.setValue(20);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    const heroFormData = this.heroDetailForm.getRawValue();
      this.heroService.updateHero(heroFormData as Hero).subscribe(() => this.goBack());
  }
}
