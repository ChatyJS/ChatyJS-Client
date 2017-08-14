import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from "../../_services/login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errors:string = null;
  returnUrl: string;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router
  ){ }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/chaty';
  }

  login(email, password){
    this.loginService.login(email, password)
      .subscribe(
        (response) => {
          console.log("[RESPONSE]:", response);
          let loginData = response.json();
          let message = loginData.message;
          let user = loginData.user;
          if (user) {
            console.log(message);
            console.log(user);
            localStorage.setItem('currentUser', JSON.stringify(user));
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
