import { LoginsService } from './../../services/logins.service';
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
  public userInfo;
  constructor( public LoginsService:LoginsService, private cookieService: CookieService) { 
    // this.userInfo = JSON.parse(this.cookieService.get('user'));
    // console.log('cookie' + JSON.parse(this.cookieService.get('user')).userAccount);
    // console.log(this.userInfo)
  }

  // getUserInfo(){
  //   this.userInfo = JSON.parse(this.cookieService.get('user'));
  // }
}
// this.router.navigate(['/signin']);
