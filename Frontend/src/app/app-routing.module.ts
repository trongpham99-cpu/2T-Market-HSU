import { InputUserComponent } from '../app/components/sign-up/input-user.component';
import { SignInComponentComponent } from '../app/components/sign-in/sign-in-component.component';
import { ViewDetailComponent } from './components/detail-page/view-detail/view-detail.component';
import {ProductXeComponent} from '../app/components/show-products-xe/product-xe/product-xe.component';
import { CreateProfileComponent } from '../app/components/test/create-profile/create-profile.component';
import { UpdateProductComponent } from '../app/components/admin/update-product/update-product.component';
import { UserPostComponent } from '../app/components/user/user-post/user-post.component';
import { UserUpdateComponent } from '../app/components/user/user-update/user-update.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
{ path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) },
{ path: 'category', loadChildren: () => import('./pages/category/category.module').then(m => m.CategoryModule) },
{ path: 'user/:id', loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule) },
{ path: 'detail/:id', loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule) },
{ path: 'viewdetail/:id',component:ViewDetailComponent },
{ path: 'update/:id',component:UpdateProductComponent },
{ path: 'input',component:CreateProfileComponent },
{ path: 'signin',component:SignInComponentComponent },
{ path:'xe',component:ProductXeComponent},
{ path: 'signup',component:InputUserComponent },
{ path: 'userpost',component:UserPostComponent },
{ path: 'userupdate/:id',component:UserUpdateComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
