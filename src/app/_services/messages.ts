import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class MessageService {
  errors:string = null;
  returnUrl: string;

  constructor(
    private _http: Http
  ) { }

  pushMessage(channelId, contentMsg) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers , withCredentials: true });
    return this._http.post("http://localhost:8000/message", { text: contentMsg, channelId: channelId }, options);
  }
}

