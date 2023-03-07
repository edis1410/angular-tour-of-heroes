import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HeroSearchModule } from '../hero-search/hero-search.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, HeroSearchModule, DashboardRoutingModule],
})
export class DashboardModule {}
