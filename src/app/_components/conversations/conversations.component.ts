import { Component
  , OnInit
  , Output
  , EventEmitter } from '@angular/core';

import { ChannelService } from "../../_services/channels";

import { FriendService } from "../../_services/friend";

import { Channel } from "../../_models/Channel";

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css']
})
export class ConversationsComponent implements OnInit {
  @Output()
  channelEvent: EventEmitter<Channel> = new EventEmitter<Channel>();
  channels:Channel[] = []

  constructor(
    private channelService: ChannelService
  ) { }

  ngOnInit() {
    this.channelService.getChannels()
      .subscribe(
        (res) => {
          let channelResp = res.json();
          this.channels = channelResp.channels;
        }
        , (error) => console.log("Error", error)
        , () => {}
      )
  }

  chooseChannel(channel){
    this.channelService.getChannelById(channel.id)
      .subscribe(
        (res) => {
          let channel = res.json();
          this.channelEvent.emit(channel)
        }
        , (error) => console.log("Error", error)
        , () => {}
      )
  }
}
