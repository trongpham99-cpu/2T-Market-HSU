import { FormsModule } from '@angular/forms';
import { InputUserComponent } from '../app/components/sign-up/input-user.component';
import { SignInComponentComponent } from '../app/components/sign-in/sign-in-component.component';
import { ViewDetailComponent } from './components/view-detail/view-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{ path: 'input-product', loadChildren: () => import('./pages/input-product/input-product.module').then(m => m.InputProductModule) },
{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
{ path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) },
{ path: 'loaisp', loadChildren: () => import('./pages/loaisp/loaisp.module').then(m => m.LoaispModule) },
{ path: 'viewdetail',component:ViewDetailComponent },
{ path: 'user', loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
