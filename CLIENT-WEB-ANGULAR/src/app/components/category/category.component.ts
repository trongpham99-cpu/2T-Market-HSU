import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { ProfileService } from "src/app/services/profile.service";
import { Profile } from "src/app/models/Profile";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Subject } from "rxjs";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  name:any;
  profiles: Profile []=[];
  readonly url = "https://server-2t-market-hsu-p27inhol4a-as.a.run.app/api";
  private profileSubscription: Subscription;
  constructor(public ProfileService:ProfileService,public route:ActivatedRoute) { }
  public count = 0;temp;
  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
    this.ProfileService.getCategory(this.name);
    this.profileSubscription = this.ProfileService
    .getProfilesStream()
    .subscribe((profiles: Profile[]) => {
      this.profiles = profiles;
      for(let i=0; i<profiles.length;i++)
      {
        this.count++;
        this.temp = profiles[i].productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        Object.assign(profiles[i], {price: this.temp });
      }
    });
  }

  ngOnDestroy() {
    this.profileSubscription.unsubscribe();
  }

}
