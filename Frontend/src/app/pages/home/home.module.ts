import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuangcaoComponent } from '../../components/ads/quangcao.component';
import {ProductComponent} from '../../components/listproduct/product/product.component';
import {ListproductComponent} from '../../components/listproduct/listproduct.component';
import {MatTableModule} from '@angular/material/table';
import { CategoryComponent } from '../../components/category/category.component';

@NgModule({
  declarations: [HomeComponent,CategoryComponent,QuangcaoComponent,ListproductComponent,ProductComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTableModule
  ]
})
export class HomeModule { }
