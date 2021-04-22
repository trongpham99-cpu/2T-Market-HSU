import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class LoginsService implements OnInit {

  constructor(public fireauth:AngularFireAuth,
    private router: Router,
    private HttpClient:HttpClient,
    private cookieService: CookieService) { }

  ngOnInit(): void {
  }
  baseUrl: string ="http://127.0.0.1:8080";
  public user: any;

  async loginAcc(user: User){
    console.log(user);
    console.log(user.userAccount);
    await this.HttpClient.post(this.baseUrl + "/login",user)
    .subscribe((result)=>{
      console.warn("result",result)
      if(result){
        // this.router.navigate(['/home']);
        let token = "trong.phamtranduc";
        this.cookieService.set('user',token );
      }
    });
  }
}
