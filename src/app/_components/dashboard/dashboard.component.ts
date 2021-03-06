import { Component, OnInit } from '@angular/core';

import { Channel } from '../../_models/Channel';
import { User } from '../../_models/User';
import { Message } from '../../_models/Messages';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  choosedList: string;
  messages:Message[] = [];
  users:User[] = [];
  channel?:Channel;

  constructor() { }

  ngOnInit() {
    this.choosedList = 'conversations';
  }

  choose(listType) {
    this.choosedList = listType;
  }

  chooseConversationEvent(event){
    this.channel = event.channel;
    this.messages = event.channel.messages;
    this.users = event.channel.users;
  }
}
