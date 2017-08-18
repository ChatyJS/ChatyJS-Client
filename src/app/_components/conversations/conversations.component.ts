import { Component, OnInit } from '@angular/core';

import { FriendService } from "../../_services/friend";

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css']
})
export class ConversationsComponent implements OnInit {

  constructor(
    private friendService: FriendService
  ) { }

  ngOnInit() {
    this.friendService.getFriends()
      .subscribe(
        (res) => console.log("RES:", res.json())
        , (error) => console.log("ERROR:", error.json())
        , () => {}
      );
  }
}
