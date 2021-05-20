import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from '../../../services/users.service'

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  constructor(public UsersService:UsersService,public route:ActivatedRoute) { }
  public user : any;
  public userAccount: any;
  public data: any;
  ngOnInit(): void {
    this.userAccount = this.route.snapshot.params['userAccount'];
    this.getDataUser();
  }

  getDataUser(){
    this.UsersService.getDataUser(this.userAccount).subscribe(data =>{
      this.data = data[0];
    })
  }
}
