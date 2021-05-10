import { LoginsService } from './../../services/logins.service';
import { ProfileService } from './../../services/profile.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  public userInfo : any ;
  searchText;
  constructor( public LoginsService:LoginsService, private cookieService: CookieService,public ProfileService:ProfileService) {
    // console.log('cookie' + JSON.parse(this.cookieService.get('user')).userAccount);
    this.getUserInfo();
    // this.signOut();
  }

  // async signOut() {
  //   await this.cookieService.delete('user');
  // }

  async getUserInfo(){
    this.userInfo = await JSON.parse(this.cookieService.get('user'));
  }
}
