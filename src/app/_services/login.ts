import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class LoginService {
  errors:string = null;
  returnUrl: string;

  constructor(
    private _http: Http,
    private route: ActivatedRoute,
    private router: Router
  ) { }

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
