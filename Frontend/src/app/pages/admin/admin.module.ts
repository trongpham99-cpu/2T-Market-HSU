import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { ShowUsersComponent } from '../../components/admin/show-users/show-users.component';
import { ShowProductComponent } from '../../components/admin/show-product/show-product.component';
import { UpdateProductComponent } from '../../components/admin/update-product/update-product.component';
import { ProductComponent } from '../../components/admin/show-product/product/product.component';



@NgModule({
  declarations: [AdminComponent,ShowUsersComponent,ShowProductComponent,UpdateProductComponent,ProductComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
