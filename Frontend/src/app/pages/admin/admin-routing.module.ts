import { SanPhamDaBanComponent } from './../../components/admin/san-pham-da-ban/san-pham-da-ban.component';
import { SanPhamChoDuyetComponent } from './../../components/admin/san-pham-cho-duyet/san-pham-cho-duyet.component';
import { ShowUsersComponent } from '../../components/admin/show-users/show-users.component';
import { CategoriesComponent } from '../../components/admin/categories/categories.component';
import { InputCategoryComponent } from '../../components/admin/input-category/input-category.component';
import { SanPhamDangBanComponent } from '../../components/admin/san-pham-dang-ban/san-pham-dang-ban.component';
import { CreateAdsComponent } from '../../components/ads/create-ads/create-ads.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent},
  { path: 'alluser', component:ShowUsersComponent },
  { path:'sanphamdangban',component: SanPhamDangBanComponent},
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
export const routingComponents = [SanPhamDaBanComponent,SanPhamChoDuyetComponent,ShowUsersComponent,InputCategoryComponent,CategoriesComponent,SanPhamDangBanComponent,CreateAdsComponent];
