import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { CategoriesService } from "src/app/services/categories.service";
import { Category } from "src/app/models/Category";
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  private profileSubscription: Subscription;

  constructor(public CategoriesService: CategoriesService) { }

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
