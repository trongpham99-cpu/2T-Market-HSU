import { SanPhamDaBanComponent } from './../../components/admin/san-pham-da-ban/san-pham-da-ban.component';
import { SanPhamChoDuyetComponent } from './../../components/admin/san-pham-cho-duyet/san-pham-cho-duyet.component';
import { ShowUsersComponent } from '../../components/admin/show-users/show-users.component';
import { CategoriesComponent } from '../../components/admin/categories/categories.component';
import { InputCategoryComponent } from '../../components/admin/input-category/input-category.component';
import { SanPhamDangBanComponent } from '../../components/admin/san-pham-dang-ban/san-pham-dang-ban.component';
import { ThongKeDoanhThuComponent } from '../../components/admin/thong-ke-doanh-thu/thong-ke-doanh-thu.component';
import { BarChartComponent } from '../../components/admin/bar-chart/bar-chart.component';
import { CreateAdsComponent } from '../../components/admin/create-ads/create-ads.component';
import { ShowAdsComponent } from '../../components/admin/show-ads/show-ads.component';

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
  { path:'doanhthu',component:ThongKeDoanhThuComponent },
  { path:'barchart',component:BarChartComponent },
  { path:'createads',component:CreateAdsComponent },
  { path:'showads',component:ShowAdsComponent },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
export const routingComponents = [SanPhamDaBanComponent,CreateAdsComponent,ShowAdsComponent,BarChartComponent,SanPhamChoDuyetComponent,ShowUsersComponent,InputCategoryComponent,CategoriesComponent,SanPhamDangBanComponent,ThongKeDoanhThuComponent];
