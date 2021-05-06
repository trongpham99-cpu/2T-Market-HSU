import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { ShowUsersComponent } from '../../components/admin/show-users/show-users.component';
import { ShowProductComponent } from '../../components/admin/show-product/show-product.component';
import { ProductComponent } from '../../components/admin/show-product/product/product.component';
import { InputCategoryComponent } from '../../components/admin/input-category/input-category.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CategoriesComponent } from '../../components/admin/categories/categories.component';
import { MatMenuModule} from '@angular/material/menu'
import { NavBarAdminComponent } from '../../components/admin/nav-bar-admin/nav-bar-admin.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { SanPhamChoDuyetComponent } from '../../components/admin/san-pham-cho-duyet/san-pham-cho-duyet.component';

@NgModule({
  declarations: [AdminComponent,ShowUsersComponent,ShowProductComponent,ProductComponent,InputCategoryComponent,CategoriesComponent,NavBarAdminComponent,SanPhamChoDuyetComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AdminRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule
  ]
})
export class AdminModule { }
