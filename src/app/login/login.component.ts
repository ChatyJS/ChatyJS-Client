import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _http: Http) { }

  ngOnInit() {
  }

  login(email, password){
    this._http
      .post("http://localhost:1337/login", this.login)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        },
        () => {}
      )
  }
}
