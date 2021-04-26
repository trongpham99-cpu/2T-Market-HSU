import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Category } from "../models/Category";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private categories: Category[] = [];
  private categories$ = new Subject<Category[]>();
  readonly url = "http://127.0.0.1:8080/api";
  constructor(private http: HttpClient) { }

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


