import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from '../../../services/users.service'
@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})
export class InfoUserComponent implements OnInit {
  public user : any;
  public loading = true;
  constructor(private UsersService:UsersService) { }

  ngOnInit(): void {
    this.UsersService.getUser()
    .subscribe((user:User[])=>{
      this.user = user;
      console.log(user);
    })
  }

}
