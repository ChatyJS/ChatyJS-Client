import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from "../../_services/login";

import { User } from "../../_models/User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errors:string = null;
  returnUrl: string;
  user?:User;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router
  ){ }

  ngOnInit() {
    // reset login status
    this.loginService.logout();

    // redirect to
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/chaty';
  }

  login(email, password){
    this.loginService.login(email, password)
      .subscribe(
        (response) => {
          console.log("[RESPONSE]:", response);
          let loginData = response.json();
          let message = loginData._body;
          console.log("Mensaje?: ", message);
          this.user = loginData.user;
          if (this.user) {
            console.log(message);
            console.log(this.user);
            localStorage.setItem('currentUser', JSON.stringify(this.user));
            this.router.navigate([this.returnUrl]);
          } else {
            this.errors = message;
          }
        },
        (error) => {
          console.error("[ERROR]:", error);
        },
        () => {}
      )
  }
}
