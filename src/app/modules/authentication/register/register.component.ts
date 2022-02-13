import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MyErrorStateMatcher} from "../../../common/application.helper";

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
    confirmPassword: new FormControl(null, Validators.required),
    address1: new FormControl(null, Validators.required),
    address2: new FormControl(null, Validators.required),
    state: new FormControl(null, Validators.required),
    pinCode: new FormControl(null, Validators.required)
  })
  public matcher = new MyErrorStateMatcher();

  constructor() {
  }

  ngOnInit(): void {
  }

}
