import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from './../environments/environment';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'
import { InputUserComponent } from './components/sign-up/input-user.component';
import  { SignInComponentComponent } from './components/sign-in/sign-in-component.component';
import  { UpdateProductComponent } from './components/admin/update-product/update-product.component';
import  { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { CookieService } from 'ngx-cookie-service';
import { CreateProfileComponent } from './components/test/create-profile/create-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SanPhamCungLoaiComponent } from './components/detail-page/san-pham-cung-loai/san-pham-cung-loai.component';
@NgModule({
  declarations: [
    AppComponent,NavBarComponent,UserUpdateComponent, FooterComponent,InputUserComponent,UpdateProductComponent,SignInComponentComponent,CreateProfileComponent, SanPhamCungLoaiComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatMenuModule,
    Ng2SearchPipeModule,
  ],
  providers: [CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
