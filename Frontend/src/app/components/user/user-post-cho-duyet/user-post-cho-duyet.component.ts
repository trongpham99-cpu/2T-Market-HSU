import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Profile } from 'src/app/models/Profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-user-post-cho-duyet',
  templateUrl: './user-post-cho-duyet.component.html',
  styleUrls: ['./user-post-cho-duyet.component.css']
})
export class UserPostChoDuyetComponent implements OnInit {

  profiles: Profile[] = [];
  private profileSubscription: Subscription;
  constructor(public profilesService: ProfileService) { }

  ngOnInit(): void {
    this.profilesService.getUserPostChoDuyet();
    this.profileSubscription = this.profilesService
      .getProfilesStream()
      .subscribe((profiles: Profile[]) => {
        this.profiles = profiles;
      });
  }

  ngOnDestroy() {
    this.profileSubscription.unsubscribe();
  }

}
