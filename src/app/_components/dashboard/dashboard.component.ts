import { Component, OnInit, Input } from '@angular/core';

import { User } from "../../_models/User";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() user:User;
  constructor() { }

  ngOnInit() {
  }

  ngOnInput() {
  }
}
