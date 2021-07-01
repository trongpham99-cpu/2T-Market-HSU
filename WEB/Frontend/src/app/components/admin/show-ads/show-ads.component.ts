import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ads } from "src/app/models/Ads";
import { AdsService } from './../../../services/ads.service';

@Component({
  selector: 'app-show-ads',
  templateUrl: './show-ads.component.html',
  styleUrls: ['./show-ads.component.css']
})
export class ShowAdsComponent implements OnInit {

  ads: Ads[]=[];
  private profileSubscription: Subscription;
  public count =0;
  constructor(public AdsService:AdsService) { }

  ngOnInit(): void {
    this.AdsService.getAllAds();
    this.profileSubscription = this.AdsService
      .getProfilesStream()
      .subscribe((ads: Ads[]) => {
        this.ads = ads;
        for(let i =0;i<ads.length;i++){
          this.count++
        }
      });
  }

  ngOnDestroy() {
    this.profileSubscription.unsubscribe();
  }

}
