import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../_models/User';
import { Message } from '../../_models/Messages';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  @Input() messages:Message[];
  @Input() users:User[];

  constructor() { }

  ngOnInit() {
  }

  ngOnInput(){
  }

  getUser(id){
    return this.users.find( user => user.id == id).name;
  }
}
