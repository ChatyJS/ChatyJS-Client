import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  choosedList: string;

  constructor(){ }

  ngOnInit() {
    this.choosedList = 'conversations';
  }

  choose(listType) {
    this.choosedList = listType;
  }
}
