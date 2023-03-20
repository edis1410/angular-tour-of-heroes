import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  UserCredential,
  signOut,
  getAuth,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private auth: Auth) {}

  a = getAuth();
  loggedIn = false;

  public loginTry(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  public logOut(): Promise<void> {
    this.loggedIn = false
    return signOut(this.a);
  }

  public isLoggedIn(): boolean{
    return this.loggedIn;
  }
}
