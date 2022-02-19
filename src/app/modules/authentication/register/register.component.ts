import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MyErrorStateMatcher} from "../../../common/application.helper";
import {UserModel} from "../../../common/models/user.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form = new FormGroup({
    registerType: new FormControl({value: 1, disabled: true}, Validators.required),
    email: new FormControl(null, [Validators.required]),
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    dob: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    confirm_password: new FormControl(null, Validators.required),
    address1: new FormControl(null, Validators.required),
    address2: new FormControl(null, Validators.required),
    state: new FormControl(null, Validators.required),
    pinCode: new FormControl(null, Validators.required)
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

  register() {
    const formData = this.form.value as UserModel;
    formData.name = (formData.firstName.toLowerCase() + formData.lastName.toLowerCase())?.trim();
    formData.dob = new Date(formData.dob).toUTCString();

    this.isLoading = true;
    this.httpClient.post(`${environment.apiURL}/auth/signup`, formData)
      .subscribe((response: any) => {
        this.isLoading = false;
        if (response && response.token) {
          this.auth.setToken(response.token);
          this.httpClient.get(`${environment.apiURL}/auth/getuser`)
            .subscribe((user: any) => {
              this.auth.user$.next(user);
              this.router.navigateByUrl('/home');
            });
        }
      }, () => this.isLoading = false);
  }
}
