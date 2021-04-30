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
  readonly url = "http://127.0.0.1:8080/api";
  constructor(private http: HttpClient, public router:Router) { }
  
  getAllCategory() {
    this.http
      .get<{ categories: Category[] }>(this.url+"/categories")
      .pipe(
        map((profileData) => {
          return profileData.categories;
        })
      )
      .subscribe((categories) => {
        this.categories = categories;
        this.categories$.next(this.categories);
        console.log(categories);
      });
  }

  getCategory(name) {
    console.log(name)
      this.http
        .get<{ category: Category[] }>(this.url + "/category/?loai_sp=" + name )
        .pipe(
          map((profileData) => {
            return profileData.category;
          })
        )
        .subscribe((categories) => {
          this.categories = categories;
          this.categories$.next(this.categories);
        });
        // this.router.navigate.(['category',this..name])
    }
  getCa(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.url + "/category?loai_sp" + "Xe");
  }



  getProfilesStream() {
    return this.categories$.asObservable();
  }

  addCategory(name: string,image: File): void {
    const categoryData = new FormData();
    categoryData.append("name", name);
    categoryData.append("image", image, name);
    this.http
      .post<{ category: Category }>(this.url + "/categories", categoryData)
      .subscribe((categoryData) => {
        const category: Category = {
          _id: categoryData.category._id,
          name: name,
          imagePath: categoryData.category.imagePath,
        };
        this.categories.push(category);
        this.categories$.next(this.categories);
      });
  }
}


