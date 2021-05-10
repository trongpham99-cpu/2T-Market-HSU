import { CategoriesService } from './../../../services/categories.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from "src/app/models/Category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[]=[];
  private profileSubscription: Subscription;
  public count =0;
  constructor(public CategoriesService:CategoriesService) { }

  ngOnInit(): void {
    this.CategoriesService.getAllCategory();
    this.profileSubscription = this.CategoriesService
      .getProfilesStream()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
        for(let i =0;i<categories.length;i++){
          this.count++
        }
      });
  }

  ngOnDestroy() {
    this.profileSubscription.unsubscribe();
  }

}
