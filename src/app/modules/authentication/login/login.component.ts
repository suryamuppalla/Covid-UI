import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MyErrorStateMatcher} from "../../../common/application.helper";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl(null, Validators.required)
  })
  public matcher = new MyErrorStateMatcher();
  public isLoading = false;

  constructor(
    private httpClient: HttpClient,
    private auth: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  submit() {
    this.isLoading = true;
    this.form.disable();
    this.httpClient.post(`${environment.apiURL}/auth/login`, this.form.value)
      .subscribe((response: any) => {
        this.auth.setToken(response?.token);
        this.httpClient.get(`${environment.apiURL}/auth/getuser`)
          .subscribe((user: any) => {
            console.log(user);
            this.isLoading = false;
            this.auth.user$.next(user);
            this.router.navigateByUrl('/home')
          }, () => {
            this.isLoading = false;
            this.form.enable();
          });
      }, () => {
        this.isLoading = false;
        this.form.enable();
      });
  }

}
