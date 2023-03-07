import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroFormComponent } from './hero-form/hero-form.component';

@NgModule({
  declarations: [HeroesComponent, HeroFormComponent],
  imports: [CommonModule, HeroesRoutingModule, ReactiveFormsModule],
})
export class HeroesModule {}
