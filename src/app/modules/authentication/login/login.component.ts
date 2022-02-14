import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MyErrorStateMatcher} from "../../../common/application.helper";
import {HttpClient} from "@angular/common/http";

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

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }

  submit() {
    this.httpClient.post(`http://127.0.0.1:8000/api/auth/login`, this.form.value)
      .subscribe(response => {
        console.log(response);
      })
  }

}
