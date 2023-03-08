import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  public heroForm = this.fb.group({
    name: this.fb.control<string | null>('Placeholder', [Validators.required]),
    age: this.fb.control<number | null>(20, [Validators.min(0)]),
    gender: this.fb.control<string | null>(null),
  });

  get name() {
    return this.heroForm.get('name');
  }
  get age() {
    return this.heroForm.get('age');
  }

  constructor(private heroService: HeroService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
      this.heroForm.addValidators(
        this.forbiddenNameValidator(this.heroes.map((hero: Hero) => hero.name))
      );
    });
  }

  public add(): void {
    if (this.heroForm.valid) {
      const heroFormData = this.heroForm.getRawValue();
      this.heroService.addHero(heroFormData as Hero).subscribe((hero) => {
        this.heroes.push(hero);
      });
    } else {
      console.log('Handle errors');
    }
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  /** A hero's name can't match the given regular expression */
  forbiddenNameValidator(names: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const found = names.filter(
        (newName: string) => newName === control.value.name
      );
      return found.length > 0
        ? { forbiddenName: { value: control.value } }
        : null;
    };
  }
}