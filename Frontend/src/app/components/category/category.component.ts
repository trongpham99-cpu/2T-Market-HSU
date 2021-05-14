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
  readonly url = "http://127.0.0.1:8080/api";
  private profileSubscription: Subscription;
  constructor(public ProfileService:ProfileService,public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
    this.ProfileService.getCategory(this.name);
    this.profileSubscription = this.ProfileService
    .getProfilesStream()
    .subscribe((profiles: Profile[]) => {
      this.profiles = profiles;
    });
  }

  ngOnDestroy() {
    this.profileSubscription.unsubscribe();
  }

}
