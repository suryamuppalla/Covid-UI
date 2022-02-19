import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {
  }
  user$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  get authenticated() {
    return localStorage.getItem('AUTH_TOKEN');
  }

  setToken(token: string) {
    localStorage.setItem('AUTH_TOKEN', `Bearer ${token}`);
  }

  logout() {
    localStorage.removeItem('AUTH_TOKEN');
    this.user$.next(null);
    this.router.navigateByUrl('/auth/login');
  }
}
