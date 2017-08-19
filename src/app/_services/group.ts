import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class GroupService {
  errors:string = null;
  returnUrl: string;

  constructor(
    private _http: Http,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  getGroups(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers , withCredentials: true });
    return this._http.get("http://localhost:8000/groups/", options);
  }
}
