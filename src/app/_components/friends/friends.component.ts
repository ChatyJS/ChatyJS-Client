import { Component, OnInit } from '@angular/core';

import { FriendService } from "../../_services/friend";

import { User } from "../../_models/User";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friends:User[] = []

  constructor(
    private friendService: FriendService
  ) { }

  ngOnInit() {
    this.friendService.getFriends()
      .subscribe(
        (res) => {
          this.friends = res.json().friends;
        }
        , (error) => console.log("ERROR:", error.json())
        , () => {}
      );
  }

  addFriend(){
    let friendName = "Cristhian";
    this.friendService.addFriend(friendName)
      .subscribe(
        (res) => console.log("RES:", res)
        , (error) => console.log("Error:", error)
        , () => {}
      )
  }
}
