import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  heroForm = this.fb.group({
    heroName: ['', Validators.required], //TODO: dodaj pravi validator in error hendlanje
    age: ['', Validators.min(0)],
    gender: [''],
  });

  constructor(private heroService: HeroService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  add(): void {
    let name = this.heroForm.controls['heroName'].value;
    let age: number = Number(this.heroForm.controls['age'].value);
    let gender = this.heroForm.controls['gender'].value;
    this.heroService
      .addHero({ name, age, gender } as Hero)
      .subscribe((hero) => {
        this.heroes.push(hero);
      });

  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}
