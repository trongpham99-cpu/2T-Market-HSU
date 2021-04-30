import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { ProfileService } from "src/app/services/profile.service";
import { CategoriesService } from "src/app/services/categories.service";
import { Profile } from "src/app/models/Profile";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Subject } from "rxjs";
import { Category } from "src/app/models/Category";
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  id:any;
  profiles: Profile[] = [];
  categories: Category[] = [];
  name:any;
  private profileSubscription: Subscription;
  constructor(public profilesService: ProfileService,public CategoriesService:CategoriesService) { }
  ngOnInit(): void {
    // this.CategoriesService.getCategory();
    this.CategoriesService.getCa().subscribe((products)=>{
      this.profiles = products;
      // console.log(products);
    })
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
