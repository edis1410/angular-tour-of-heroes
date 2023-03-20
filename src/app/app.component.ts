import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Tour of Heroes';

  constructor(public login: LoginService, private router: Router) {}
  public logOutTry(): void {
    console.log(this.login.isLoggedIn())
    this.login.logOut().then(
      () => this.onSuccess(),
      () => this.onFail()
    );
  }
  public onSuccess(): void {
    this.login.loggedIn = false;
    this.router.navigate(['/login']);
  }

  public onFail(): void {
    console.log('failed logout')
  }
}
