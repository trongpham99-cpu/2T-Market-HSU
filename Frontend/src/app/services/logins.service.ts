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
    public user: any;

  ngOnInit(): void {
    this.fireauth.authState.subscribe((auth)=>{
      if(auth){
        this.user = auth;
      }
    })
  }
  baseUrl: string ="http://127.0.0.1:8080";

  async loginGoogle(){
    const provider =  new firebase.default.auth.GoogleAuthProvider();
    try{
      await this.fireauth.signInWithPopup(provider);
      console.log("success")
    }catch(err){
      console.log("fail !")
    }

  }

  async logOut(){
    this.cookieService.delete('user');
    this.cookieService.delete('token');
    this.router.navigate(['']);
  }

  public userInfomation;
  async loginAcc(user: User){
    console.log(user);
    console.log(user.userAccount);
    await this.HttpClient.post(this.baseUrl + "/login",user)
    .subscribe((result)=>{
      console.log("result",result);
      if(result){
        this.cookieService.set('user',JSON.stringify(user));
        this.cookieService.set('token', result['token']);
        // this.user = JSON.parse(this.cookieService.get('user'));
        // this.user = JSON.parse(this.cookieService.get('user'));
        window.location.reload();
      }
    });
  }
}
