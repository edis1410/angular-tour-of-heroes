import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeroesComponent],
  imports: [CommonModule, HeroesRoutingModule, ReactiveFormsModule],
})
export class HeroesModule {}
