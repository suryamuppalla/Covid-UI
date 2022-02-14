import {Injectable} from '@angular/core';
import {UserModel} from "../common/models/user.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Subject<UserModel> = new Subject<UserModel>();

  constructor() {
  }

  get authenticated() {
    return localStorage.getItem('AUTH_TOKEN');
  }

  setToken(token: string) {
    localStorage.setItem('AUTH_TOKEN', `Bearer ${token}`);
  }

  logout() {
    localStorage.removeItem('AUTH_TOKEN');
  }
}
