import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { CategoriesService } from "src/app/services/categories.service";
import { Category } from "src/app/models/Category";
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from "src/app/models/Profile";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from "rxjs";
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];
  private profileSubscription: Subscription;
  profiles: Profile[] = [];
  name:any;
  private profiles$ = new Subject<Profile[]>();
  readonly url = "http://127.0.0.1:8080/api";
  constructor(private CategoriesService: CategoriesService, private ProfileService:ProfileService,private http: HttpClient) { }

  ngOnInit(): void {
    this.CategoriesService.getAllCategory();
    this.profileSubscription = this.CategoriesService
      .getProfilesStream()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
      });
  } 

  ngOnDestroy() {
    this.profileSubscription.unsubscribe();
  }

}
