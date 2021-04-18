import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaispRoutingModule } from './loaisp-routing.module';
import { LoaispComponent } from './loaisp.component';
import { ShowProductsXeComponent } from '../../components/show-products-xe/show-products-xe.component';
import { ProductXeComponent } from '../../components/show-products-xe/product-xe/product-xe.component';


@NgModule({
  declarations: [LoaispComponent,ShowProductsXeComponent,ProductXeComponent],
  imports: [
    CommonModule,
    LoaispRoutingModule
  ]
})
export class LoaispModule { }
