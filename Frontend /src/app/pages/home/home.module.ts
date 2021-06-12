import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuangcaoComponent } from '../../components/ads/ads-view/quangcao.component';
import {ProductComponent} from '../../components/listproduct/product/product.component';
import {ListproductComponent} from '../../components/listproduct/listproduct.component';
import {MatTableModule} from '@angular/material/table';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CategoriesComponent } from '../../components/categories/categories.component';
@NgModule({
  declarations: [HomeComponent,QuangcaoComponent,ListproductComponent,ProductComponent,CategoriesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTableModule,
    Ng2SearchPipeModule
  ]
})
export class HomeModule { }
