import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryPageRoutingModule } from './category-page-routing.module';
import { CategoryPageComponent } from './category-page.component';
import { CategoryComponent } from '../../components/category/category.component';


@NgModule({
  declarations: [CategoryPageComponent,CategoryComponent],
  imports: [
    CommonModule,
    CategoryPageRoutingModule
  ]
})
export class CategoryPageModule { }
