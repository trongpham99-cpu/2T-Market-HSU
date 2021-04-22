import { Component, OnInit } from '@angular/core';
import { ProfileService } from "src/app/services/profile.service";
import { Profile } from "../../../models/Profile";
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-all-profiles',
  templateUrl: './all-profiles.component.html',
  styleUrls: ['./all-profiles.component.css']
})
export class AllProfilesComponent implements OnInit {

  profiles: Profile[] = [];
  private profileSubscription: Subscription;

  constructor(private profilesService: ProfileService) { }

  ngOnInit(): void {
    this.profilesService.getProfiles();
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
