import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Profile } from "src/app/models/Profile";
import { UsersService } from '../../../services/users.service'
import { ProfileService } from '../../../services/profile.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})
export class InfoUserComponent implements OnInit {
  public user : any;
  profiles : Profile[]=[];
  public ngayThamGia: any;
  private profileSubscription: Subscription;
  constructor(public UsersService:UsersService,public profilesService:ProfileService) { }

  ngOnInit(): void {
    this.UsersService.getUser()
    .subscribe((user:User[])=>{
      this.user = user;
    })
  }

}
