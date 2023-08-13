import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Ads } from "../models/Ads";
import { Observable, Subject } from "rxjs";
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdsService {
  private ads: Ads[]=[];
  private ads$ = new Subject<Ads[]>();

  readonly url = "https://server-2t-market-hsu-p27inhol4a-as.a.run.app/api";
  constructor(private http: HttpClient, public router:Router) { }

  async getAllAds() {
    await this.http
      .get<{ ads: Ads[] }>(this.url+"/ads")
      .pipe(
        map((profileData) => {
          return profileData.ads;
        })
      )
      .subscribe((ads) => {
        this.ads = ads;
        this.ads$.next(this.ads);
      });
  }

  getProfilesStream() {
    return this.ads$.asObservable();
  }

  addAds(name: string,image: File): void {
    const adsData = new FormData();
    adsData.append("name", name);
    adsData.append("image", image, name);
    this.http
      .post<{ ads: Ads }>(this.url + "/ads", adsData)
      .subscribe((adsData) => {
        const ads: Ads = {
          _id: adsData.ads._id,
          name: name,
          imagePath: adsData.ads.imagePath,
        };
        this.ads.push(ads);
        this.ads$.next(this.ads);
      });
  }

}
