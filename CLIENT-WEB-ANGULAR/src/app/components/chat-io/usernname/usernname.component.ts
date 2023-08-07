import { Output } from '@angular/core';
import { Component, OnInit,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-usernname',
  templateUrl: './usernname.component.html',
  styleUrls: ['./usernname.component.scss']
})
export class UsernnameComponent implements OnInit {

  @Output() userNameEvent = new EventEmitter<string>();

  userName = '';

  constructor() { }

  ngOnInit(): void {
  }

  setUserName(): void {
    this.userNameEvent.emit(this.userName);
  }

}
