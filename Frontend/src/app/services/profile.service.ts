import { Category } from './../models/Category';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { Profile } from "../models/Profile";
import { Observable, of, Subject } from "rxjs";
import { Body } from "@angular/http/src/body";
import { LoginsService } from '../services/logins.service'
import { UsersService } from './users.service';
@Injectable({
  providedIn: "root",
})
export class ProfileService {
  private profiles: Profile[] = [];
  private profiles$ = new Subject<Profile[]>();
  readonly url = "http://127.0.0.1:8080/api";

  public count = 0;
  public price = 0;
  public searchText;
  constructor(private http: HttpClient,public UsersService:UsersService) {}

  click(){
    console.log(this.searchText);
  }

  getSearch(){
    return this.http.get(this.url + "/search?search=" + this.searchText);
  }

  getCategory(name: Category) {
    this.http
      .get<{ category: Profile[] }>(this.url + "/category/?loai_sp=" + name )
      .pipe(
        map((profileData) => {
          return profileData.category;
        })
      )
      .subscribe((profiles) => {
        this.profiles = profiles;
        this.profiles$.next(this.profiles);
        console.log(profiles)
      });
      // this.router.navigate.(['category',this..name])
}

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
      });
  }
  getDetail(id) {
    return this.http.get("http://127.0.0.1:8080/api/detail/?id=" + id)
  }

  deleteProduct(id){
    return this.http.delete(this.url+"/product/?id=" + id  ).subscribe(() =>{
      console.log("Deleted");
    })
  }

  updateProduct(id, product){
    const endpointUrl = 'http://127.0.0.1:8080/api/product/?id='
    return this.http.put(endpointUrl + id,product);
  }


  getProfilesStream() {
    return this.profiles$.asObservable();
  }
  addProfile(productName: string, productPrice:string, description:string, productAddress:string, loai_sp:string, nguoi_dang_sp:string, ngay_dang:string, image: File): void {
    const profileData = new FormData();
    profileData.append("productName", productName);
    profileData.append("productPrice", productPrice);
    profileData.append("description", description);
    profileData.append("productAddress", productAddress);
    profileData.append("loai_sp", loai_sp);
    profileData.append("nguoi_dang_sp", nguoi_dang_sp);
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
          nguoi_dang_sp:nguoi_dang_sp,
          ngay_dang:ngay_dang,
          imagePath: profileData.profile.imagePath,
        };
        this.profiles.push(profile);
        this.profiles$.next(this.profiles);
      });
  }
}
