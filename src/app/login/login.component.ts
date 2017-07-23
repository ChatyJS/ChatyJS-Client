import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errors:string = null;
  returnUrl: string = '/chaty';

  constructor(
    private _http: Http,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(email, password){
    let login = { email: email, password: password };

    this._http
      .post("http://localhost:8000/login", login)
      .subscribe(
        (response) => {
          console.log("[RESPONSE]:", response);
          let loginData = response.json();
          let message = loginData.message;
          let user = loginData.user;
          if (user) {
            console.log(message);
            console.log(user);
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
