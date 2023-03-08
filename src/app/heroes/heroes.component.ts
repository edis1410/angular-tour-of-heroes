import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  heroForm = this.fb.group({
    heroName: this.fb.control('Placeholder', [Validators.required]), //TODO: dodaj pravi validator in error hendlanje
    age: this.fb.control(20, Validators.min(0)),
    gender: this.fb.control(''),
  });
  get heroName() {
    return this.heroForm.get('heroName');
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
      this.heroForm.addValidators(this.forbiddenNameValidator(this.heroes.map((hero:Hero)=>hero.name)));
    });
  }

  add(): void {
    console.log(this.heroForm.valid);
    // let name = this.heroForm.controls['heroName'].value;
    // let age: number = Number(this.heroForm.controls['age'].value);
    // let gender = this.heroForm.controls['gender'].value;
    if (this.heroForm.valid) {
      const heroData = this.heroForm.value;
    // if (gender === "") {
    //   gender = "Not specified"
    // }
    this.heroService
      .addHero(heroData)
      .subscribe((hero) => {
        this.heroes.push(hero);
      });
    }
    
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  /** A hero's name can't match the given regular expression */
  forbiddenNameValidator(names: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const found = names.filter((name:string)=>name === control.value.heroName);
    return found.length > 0 ? {forbiddenName: {value: control.value}} : null;
  };
}
}
