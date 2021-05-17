import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Profile } from "src/app/models/Profile";
import { UsersService } from '../../../services/users.service'
import { ProfileService } from '../../../services/profile.service'
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { join } from 'node:path';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})
export class InfoUserComponent implements OnInit {
  public profile: any;
  userAccount:any;
  public data:User;
  public profileSubscription: Subscription;
  constructor(public UsersService:UsersService,public profilesService:ProfileService,public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.userAccount = this.route.snapshot.params['userAccount'];
    this.getOne();
  }

  async getOne(){
    await this.UsersService.getDataUser(this.userAccount).subscribe(data =>{
      this.data =  data[0];
    })
  }

}
