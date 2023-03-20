import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'dashboard',  loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'detail/:id', loadChildren: () => import('./hero-detail/hero-detail.module').then(m => m.HeroDetailModule)  },
  { path: 'heroes', loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule) },
  { path: 'star-wars', loadChildren: () => import('./star-wars/star-wars.module').then(m => m.StarWarsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
