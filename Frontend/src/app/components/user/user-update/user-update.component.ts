import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from '../../../services/users.service'

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  constructor(public UsersService:UsersService) { }
  public user : any;

  ngOnInit(): void {
    this.UsersService.getUser()
    .subscribe((user:User[])=>{
      this.user = user;
      console.log(user)
    })
  }

}