import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroDetailRoutingModule } from './hero-detail-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeroDetailComponent],
  imports: [CommonModule, FormsModule, HeroDetailRoutingModule],
})
export class HeroDetailModule {}
