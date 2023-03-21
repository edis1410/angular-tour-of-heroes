import { inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'dashboard', canActivate: [() => inject(AuthGuardService).canActivate()], loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'detail/:id', canActivate: [() => inject(AuthGuardService).canActivate()], loadChildren: () => import('./hero-detail/hero-detail.module').then(m => m.HeroDetailModule)  },
  { path: 'heroes', canActivate: [() => inject(AuthGuardService).canActivate()], loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule) },
  { path: 'star-wars', canActivate: [() => inject(AuthGuardService).canActivate()], loadChildren: () => import('./star-wars/star-wars.module').then(m => m.StarWarsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
