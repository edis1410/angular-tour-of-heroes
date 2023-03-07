import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
})
export class HeroFormComponent {
  

  constructor(private fb: FormBuilder){}

  heroForm = this.fb.group({
    heroName: ['', Validators.required], //TODO: dodaj pravi validator
    age: ['', Validators.min(0)],
    gender: [''],
  });

  onSubmit() {
    //TODO: dodaj pravo metodo
    console.warn(this.heroForm.value);
  }
  
}
