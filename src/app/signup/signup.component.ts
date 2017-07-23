import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

import { User } from "../models/User";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errors:string = null;

  constructor(private _http: Http) { }

  ngOnInit() {
  }

  signup(name, age, email, password){
    let newUser = new User()
    newUser.name = name
    newUser.age = age
    newUser.email = email
    newUser.password = password

    this._http
      .post("http://localhost:8000/user", newUser)
      .subscribe(
        (response) => {
          console.log("[RESPONSE]:", response);
          let loginData = response.json();
          let message = loginData.message;
          let user = loginData.user;
          if (user) {
            console.log(message);
            console.log(user);
          } else {
            console.log(message);
            console.log(user);
          }
        },
        (errorResponse) => {
          console.error("[ERROR]:", errorResponse);
          let errors = errorResponse.json();
          this.errors = errors.details;
        },
        () => {}
      )
  }

}
