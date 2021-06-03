import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ads } from 'src/app/models/Ads';
import { AdsService } from '../../../services/ads.service'
@Component({
  selector: 'app-quangcao',
  templateUrl: './quangcao.component.html',
  styleUrls: ['./quangcao.component.css']
})
export class QuangcaoComponent implements OnInit {
  ads: Ads[] = [];
  private profileSubscription: Subscription;
  name:any;
  public data;
  constructor(private AdsService:AdsService) { }

  ngOnInit(): void {
    this.AdsService.getAllAds();
    this.profileSubscription = this.AdsService
      .getProfilesStream()
      .subscribe((ads: Ads[]) => {
        this.ads = ads;
        for(let i =0; i<ads.length; i++){
          this.data = ads[0]
        }
        console.log(this.data)
      });
  }
  
  ngOnDestroy() {
    this.profileSubscription.unsubscribe();
  }

}
