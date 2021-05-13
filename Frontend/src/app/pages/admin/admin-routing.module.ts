import { SanPhamDaBanComponent } from './../../components/admin/san-pham-da-ban/san-pham-da-ban.component';
import { SanPhamChoDuyetComponent } from './../../components/admin/san-pham-cho-duyet/san-pham-cho-duyet.component';
import { ShowUsersComponent } from '../../components/admin/show-users/show-users.component';
import { ShowProductComponent } from '../../components/admin/show-product/show-product.component';
import { ProductComponent } from '../../components/admin/show-product/product/product.component';
import { CategoriesComponent } from '../../components/admin/categories/categories.component';
import { InputCategoryComponent } from '../../components/admin/input-category/input-category.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent},
  { path: 'alluser', component:ShowUsersComponent },
  { path: 'allproduct', component:ProductComponent },
  { path:'sanphamdaban',component: SanPhamDaBanComponent},
  { path:'sanphamchoduyet',component: SanPhamChoDuyetComponent},
  { path:'allcategories',component:CategoriesComponent },
  { path:'inputcategory',component:InputCategoryComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
export const routingComponents = [SanPhamDaBanComponent,SanPhamChoDuyetComponent,ShowUsersComponent,InputCategoryComponent,ShowProductComponent,ProductComponent,CategoriesComponent];
