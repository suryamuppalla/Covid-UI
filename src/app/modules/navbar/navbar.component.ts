import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private httpClient: HttpClient
  ) {
  }

  ngOnInit(): void {
  }

  logout() {
    this.httpClient.get(`${environment.apiURL}/auth/logout`)
      .subscribe(() => this.auth.logout());
  }
}
