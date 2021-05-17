import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import {ShowUsersComponent} from '../../components/admin/show-users/show-users.component'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  displayUser = false;
  displayProduct = false;
  displayCategory = false;
  displayInputcCategory = false;
  displayWait = false;
  constructor(public Userservice:UsersService) { }

  ngOnInit(): void {
  }

  onPressUser(){
    this.displayUser = !this.displayUser;
  }

  onPressProduct() {
    this.displayProduct = !this.displayProduct;
  }

  onPressCategory(){
    this.displayCategory = !this.displayCategory;
  }

  onPressDisplayInputcCategory(){
    this.displayInputcCategory = !this.displayInputcCategory;
  }

  onPressWait(){
    this.displayWait = !this.displayWait;
  }


}
