import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSearchComponent } from './hero-search.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeroSearchComponent],
  imports: [CommonModule,RouterModule],
  exports: [HeroSearchComponent]
})
export class HeroSearchModule {}
