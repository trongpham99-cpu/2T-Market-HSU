import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { map } from "rxjs/operators";

import { Profile } from "../models/Profile";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  private profiles: Profile[] = [];
  private profiles$ = new Subject<Profile[]>();
  readonly url = "http://localhost:3000/api/profiles";

  constructor(private http: HttpClient) {}

  getProfiles() {
    this.http
      .get<{ profiles: Profile[] }>(this.url)
      .pipe(
        map((profileData) => {
          return profileData.profiles;
        })
      )
      .subscribe((profiles) => {
        this.profiles = profiles;
        this.profiles$.next(this.profiles);
      });
  }

  getProfilesStream() {
    return this.profiles$.asObservable();
  }

  addProfile(productName: string,productPrice:string,description:string,productAddress:string,loai_sp:string,nguoi_dang:string,image: File): void {
    const profileData = new FormData();
    profileData.append("name", productName);
    profileData.append("price", productPrice);
    profileData.append("description", description);
    profileData.append("address", productAddress);
    profileData.append("loai_sp", loai_sp);
    profileData.append("nguoi_dang", nguoi_dang);
    profileData.append("image", image, productName);
    this.http
      .post<{ profile: Profile }>(this.url, profileData)
      .subscribe((profileData) => {
        const profile: Profile = {
          _id: profileData.profile._id,
          productName: productName,
          productPrice: productPrice,
          description:description,
          productAddress:productAddress,
          loai_sp:loai_sp,
          nguoi_dang:nguoi_dang,
          imagePath: profileData.profile.imagePath,
        };
        this.profiles.push(profile);
        this.profiles$.next(this.profiles);
      });
  }
}
