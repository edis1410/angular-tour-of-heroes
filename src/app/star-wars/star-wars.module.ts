import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarWarsComponent } from './star-wars.component';
import { StarWarsRoutingModule } from './star-wars-routing.module';



@NgModule({
  declarations: [StarWarsComponent],
  imports: [
    CommonModule,
    StarWarsRoutingModule
  ]
})
export class StarWarsModule { }
