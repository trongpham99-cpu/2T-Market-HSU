import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { ProfileService } from "src/app/services/profile.service";
import { Profile } from "src/app/models/Profile";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // profiles: Profile[] = [];
  id:any;
  profiles: Profile[] = [];
  private profiles$ = new Subject<Profile[]>();
  readonly url = "http://127.0.0.1:8080/api";
  private profileSubscription: Subscription;
  constructor(public profilesService: ProfileService){
  }
  ngOnInit(): void {
    this.profilesService.getProductsNew();
    // this.profilesService.getDetail(this.profiles);
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
