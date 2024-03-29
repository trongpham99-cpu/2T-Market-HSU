import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Category } from "../models/Category";
import { Observable, Subject } from "rxjs";
import {Router} from '@angular/router';
import { Profile } from '../models/Profile';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private categories: Category[] = [];
  private categories$ = new Subject<Category[]>();
  private profiles: Profile[] = [];
  private profiles$ = new Subject<Profile[]>();
  readonly url = "https://server-2t-market-hsu-p27inhol4a-as.a.run.app/api";
  constructor(private http: HttpClient, public router:Router) { }

  public countCategory = 0;

  
  async getAllCategory() {
    await this.http
      .get<{ categories: Category[] }>(this.url+"/categories")
      .pipe(
        map((profileData) => {
          return profileData.categories;
        })
      )
      .subscribe((categories) => {
        this.categories = categories;
        this.categories$.next(this.categories);
        for(let i= 1; i<=categories.length;i++){
          this.countCategory++
        }
      });
  }

  getProfilesStream() {
    return this.categories$.asObservable();
  }

  addCategory(name: string, status: string,image: File): void {
    const categoryData = new FormData();
    categoryData.append("name", name);
    categoryData.append("status", status);
    categoryData.append("image", image, name);
    this.http
      .post<{ category: Category }>(this.url + "/categories", categoryData)
      .subscribe((categoryData) => {
        const category: Category = {
          _id: categoryData.category._id,
          name: name,
          status: status,
          imagePath: categoryData.category.imagePath,
        };
        this.categories.push(category);
        this.categories$.next(this.categories);
      });
  }
}


