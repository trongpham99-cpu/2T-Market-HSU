import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { ShowUsersComponent } from '../../components/admin/show-users/show-users.component';
import { ShowProductComponent } from '../../components/admin/show-product/show-product.component';
import { UpdateProductComponent } from '../../components/admin/update-product/update-product.component';
import { ProductComponent } from '../../components/admin/show-product/product/product.component';
import { InputCategoryComponent } from '../../components/admin/input-category/input-category.component';
import { from } from 'rxjs';



@NgModule({
  declarations: [AdminComponent,ShowUsersComponent,ShowProductComponent,UpdateProductComponent,ProductComponent,InputCategoryComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AdminRoutingModule,

  ]
})
export class AdminModule { }
