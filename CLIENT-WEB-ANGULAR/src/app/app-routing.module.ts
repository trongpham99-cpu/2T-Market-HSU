import { InputUserComponent } from '../app/components/sign-up/input-user.component';
import { SignInComponentComponent } from '../app/components/sign-in/sign-in-component.component';
import { CreateProfileComponent } from '../app/components/test/create-profile/create-profile.component';
import { UpdateProductComponent } from '../app/components/admin/update-product/update-product.component';
import { UserPostComponent } from '../app/components/user/user-post/user-post.component';
import { UserUpdateComponent } from '../app/components/user/user-update/user-update.component';
import { NangcapComponent } from '../app/components/user/nangcap/nangcap.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
const routes: Routes = [
{ path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
{ path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) },
{ path: 'user/:userAccount', loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule) },
{ path: 'detail/:id', loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule) },
{ path: 'category/:name', loadChildren: () => import('./pages/category-page/category-page.module').then(m => m.CategoryPageModule) },
{ path: 'update/:id',component:UpdateProductComponent },
{ path: 'input',component:CreateProfileComponent },
{ path: 'signin',component:SignInComponentComponent },
{ path: 'signup',component:InputUserComponent },
{ path: 'userpost',component:UserPostComponent },
{ path: 'userupdate/:userAccount',component:UserUpdateComponent },
{ path: 'usernangcap/:userAccount',component:NangcapComponent },
{ path: 'search/:productName', loadChildren: () => import('./pages/search-page/search-page.module').then(m => m.SearchPageModule) },
{ path: 'report/:id', loadChildren: () => import('./pages/report-page/report-page.module').then(m => m.ReportPageModule) },
{ path: 'message/:userAccount', loadChildren: () => import('./pages/message-report/message-report.module').then(m => m.MessageReportModule) },
{ path: 'doanhthu/:userAccount', loadChildren: () => import('./pages/doanhthu-user-page/doanhthu-user-page.module').then(m => m.DoanhthuUserPageModule) },
{ path: 'userinfo/:userAccount', loadChildren: () => import('./pages/info-user-page/info-user-page.module').then(m => m.InfoUserPageModule) },
{ path: 'chat', loadChildren: () => import('./pages/chat-io/chat-io.module').then(m => m.ChatIoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
