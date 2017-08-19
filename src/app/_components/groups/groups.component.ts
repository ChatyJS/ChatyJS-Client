import { Component, OnInit } from '@angular/core';
import {Group} from 'app/_models/Group';
import {User} from 'app/_models/User';

import {GroupService} from 'app/_services/group';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups:Group[] = []

  constructor(
    private groupService: GroupService
  ) { }

  ngOnInit() {

    //this.groups.push(new Group(undefined, "fiesta", [new User(undefined,"jairo"), new User(undefined, "alguien")]));
    //this.groups.push(new Group(undefined, "rezar", [new User(undefined,"jhon"), new User(undefined, "carito")]));

    this.groupService.getGroups()
      .subscribe(
        (res) => {
          let channelResp = res.json();
          console.log(channelResp);
          //this.groups = channelResp.channels;
          this.groups = channelResp.groups;
        }
        , (error) => console.log("Error", error)
        , () => {}
      );
  }
}
