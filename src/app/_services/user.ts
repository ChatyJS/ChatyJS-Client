import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

import { User } from "../_models/User";

@Injectable()
export class UserService {
  errors:string = null;

  constructor(
    private _http: Http
  ) { }

}
