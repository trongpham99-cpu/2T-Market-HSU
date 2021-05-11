import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from "src/app/services/profile.service";
import { UsersService } from "src/app/services/users.service";
import { Profile } from "src/app/models/Profile";
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {
  profiles: Profile[] = [];
  private profileSubscription: Subscription;
  constructor(public profilesService: ProfileService) { }
  public price = 0;count=0;
  ngOnInit(): void {
    this.profilesService.getUserPost();
    this.profileSubscription = this.profilesService
      .getProfilesStream()
      .subscribe((profiles: Profile[]) => {
        this.profiles = profiles;
        for(let i=0;i<profiles.length;i++){
          this.price += parseFloat(profiles[i].productPrice);
          this.count++;
        }
      });
  }

  ngOnDestroy() {
    this.profileSubscription.unsubscribe();
  }

}
