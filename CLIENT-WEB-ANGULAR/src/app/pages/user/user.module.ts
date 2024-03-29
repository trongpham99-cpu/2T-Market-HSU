import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserPostComponent } from '../../components/user/user-post/user-post.component';
import { InfoUserComponent } from '../../components/user/info-user/info-user.component';
import { UserPostChoDuyetComponent } from '../../components/user/user-post-cho-duyet/user-post-cho-duyet.component';
import { UserDaBanComponent } from '../../components/user/user-da-ban/user-da-ban.component';
import { UserDoanhThuComponent } from '../../components/user/user-doanh-thu/user-doanh-thu.component';
import {MatButtonModule} from '@angular/material/button';
import { NangcapComponent } from '../../components/user/nangcap/nangcap.component';

@NgModule({
  declarations: [UserComponent,UserPostComponent,InfoUserComponent,UserPostChoDuyetComponent,UserDaBanComponent,UserDoanhThuComponent,NangcapComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatButtonModule
  ]
})
export class UserModule { }
