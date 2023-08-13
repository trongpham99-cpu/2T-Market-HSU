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
  public price: any;
  page=1;
  private profiles$ = new Subject<Profile[]>();
  readonly url = "https://server-2t-market-hsu-p27inhol4a-as.a.run.app/api";
  private profileSubscription: Subscription;
  constructor(public profilesService: ProfileService){
  }
  ngOnInit(): void {
      this.get();
  }
  public temp;
  get(){
    this.profilesService.getProductsNew(this.page++);
    // this.profilesService.getDetail(this.profiles);
    this.profileSubscription = this.profilesService
      .getProfilesStream()
      .subscribe((profiles: Profile[]) => {
        this.profiles = profiles;
        for(let i=0;i<profiles.length;i++){
          this.temp = profiles[i].productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          Object.assign(profiles[i], {price: this.temp });
        }
        // console.log(profiles)
      });
  }
  
  ngOnDestroy() {
    this.profileSubscription.unsubscribe();
  }
}
