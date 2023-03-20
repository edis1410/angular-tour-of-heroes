import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  UserCredential,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private auth: Auth) {}

  public loginTry(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
}
