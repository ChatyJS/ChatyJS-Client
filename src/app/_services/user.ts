import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class UserService {
  errors:string = null;

  constructor(
    private _http: Http
  ) { }

  getFriends(user){
    this._http
      .get("http://localhost:8000/friends/" + user.id)
      .subscribe(
        (response) => {
          console.log("[RESPONSE]:", response);
          return [];
        },
        (error) => {
          console.error("[ERROR]:", error);
          return [];
        },
        () => {}
      )
  }
}
