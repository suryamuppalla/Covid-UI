import { Component } from '@angular/core';
import {AuthService} from "./services/auth.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private auth: AuthService, private httpClient: HttpClient) {
    if (auth.authenticated) {
      this.httpClient.get(`${environment.apiURL}/auth/getuser`)
        .subscribe((user: any) => {
          this.auth.user$.next(user);
        })
    }
  }
}
