import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
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
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers , withCredentials: true });
    return this._http.post("http://localhost:8000/login", login, options)
  }
}
