import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { Profile } from "../models/Profile";
import { Observable, of, Subject } from "rxjs";
import { Body } from "@angular/http/src/body";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  private profiles: Profile[] = [];
  private profiles$ = new Subject<Profile[]>();
  readonly url = "http://127.0.0.1:8080/api";

  public count = 0;
  public price = 0;

  constructor(private http: HttpClient) {}

  getProductsNew() {
    this.http
      .get<{ productsNew: Profile[] }>(this.url+"/newproduct")
      .pipe(
        map((profileData) => {
          return profileData.productsNew;
        })
      )
      .subscribe((profiles) => {
        this.profiles = profiles;
        this.profiles$.next(this.profiles);
        console.log(profiles);
      });
  }

  getAllProductAdmin() {
    this.http
      .get<{ profiles: Profile[] }>(this.url+"/product")
      .pipe(
        map((profileData) => {
          return profileData.profiles;
        })
      )
      .subscribe((profiles) => {
        this.profiles = profiles;
        this.profiles$.next(this.profiles);
        console.log(profiles);
        for(let i=1; i <= profiles.length;i++){
        this.count++;
        // console.log(profiles[i].productPrice);
        // console.log(profiles[i].productPrice)
        }
        // console.log(this.price)
      });
      // console.log(parseFloat("1.000.000") + parseFloat("1.200.000"));

  }

  getDetail(id) {
    return this.http.get("http://127.0.0.1:8080/api/detail/?id=" + id)
  }

  deleteProduct(id){
    return this.http.delete(this.url+"/product/?id=" + id  ).subscribe(() =>{
      console.log("Deleted");
    })
  }

  getProfilesStream() {
    return this.profiles$.asObservable();
  }

  addProfile(productName: string,productPrice:string,description:string,productAddress:string,loai_sp:string,image: File): void {
    const profileData = new FormData();
    profileData.append("productName", productName);
    profileData.append("productPrice", productPrice);
    profileData.append("description", description);
    profileData.append("productAddress", productAddress);
    profileData.append("loai_sp", loai_sp);
    profileData.append("image", image, productName);
    this.http
      .post<{ profile: Profile }>(this.url + "/product", profileData)
      .subscribe((profileData) => {
        const profile: Profile = {
          _id: profileData.profile._id,
          productName: productName,
          productPrice:productPrice,
          description:description,
          productAddress:productAddress,
          loai_sp:loai_sp,
          imagePath: profileData.profile.imagePath,
        };
        this.profiles.push(profile);
        this.profiles$.next(this.profiles);
      });
  }
}
