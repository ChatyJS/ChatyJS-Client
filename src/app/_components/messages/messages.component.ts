import { Component, OnInit, Input } from '@angular/core';

import { Channel } from '../../_models/Channel';
import { User } from '../../_models/User';
import { Message } from '../../_models/Messages';

import { MessageService } from '../../_services/messages';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  @Input() messages:Message[];
  @Input() users:User[];
  @Input() channel:Channel;

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }

  ngOnInput(){
  }

  getUser(id){
    return this.users.find( user => user.id == id).name;
  }

  pushMessage(contentMsg){
    console.log(this.channel);
    this.messageService.pushMessage(this.channel.id, contentMsg)
      .subscribe(
        (res) => {
          let message = res.json();
          console.log(message);
        }
        , (error) => console.log(error)
        , () => {}
      )
  }
}
