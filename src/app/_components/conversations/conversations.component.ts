import { Component, OnInit } from '@angular/core';

import { UserService } from "../../_services/user";

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css']
})
export class ConversationsComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getFriends()
      .subscribe(
        (res) => console.log("RES:", res.json())
        , (error) => console.log("ERROR:", error.json())
        , () => {}
      );
  }
}
