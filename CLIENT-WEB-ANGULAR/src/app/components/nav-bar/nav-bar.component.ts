import { LoginsService } from './../../services/logins.service';
import { ProfileService } from './../../services/profile.service';
import { ReportService } from './../../services/report.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model'
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public userInfo : any ;
  constructor(public ReportService:ReportService, public LoginsService:LoginsService, private cookieService: CookieService,public ProfileService:ProfileService,private router:Router) {
    // console.log('cookie' + JSON.parse(this.cookieService.get('user')).userAccount);
    // this.getUserInfo();
    // this.signOut();
  }
  ngOnInit(): void {
    this.userInfo = JSON.parse(this.cookieService.get('user'));
  }

  async signOut() {
    await this.LoginsService.logOut();
    this.userInfo = null;
  }
  async clickHome(){
    await this.router.navigate(['']);
    window.location.reload();
  }


  // async getUserInfo(){
  //   this.userInfo = await JSON.parse(this.cookieService.get('user'));
  // }
}
