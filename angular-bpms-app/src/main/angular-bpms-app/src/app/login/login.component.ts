import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import * as _ from "lodash"

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if(this.authService.isLoggedIn()){
      this.router.navigate(['/dashboard'])
    }

    this.initLoginForm()
  }

  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: [
        "",
        Validators.compose([Validators.required])
      ],
      password: [
        "",
        Validators.compose([Validators.required])
      ]
    });
  }


  login() {
    this.authService.doLogin(
      this.loginForm.value.username,
      this.loginForm.value.password
    )
      .subscribe(res => {
        console.log('login ok ');
        this.router.navigate(['dashboard'])

      }, (err) => console.log("login error ", "err"))
  }




}
