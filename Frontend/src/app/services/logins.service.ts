import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class LoginsService implements OnInit {

  users : User[];

  constructor(public fireauth:AngularFireAuth,
    private router: Router,
    private HttpClient:HttpClient) { }

  public user_google:any;

  ngOnInit(): void {
    this.fireauth.authState.subscribe((fireauth)=>{
      if(fireauth) {
        this.user_google = fireauth;
      }
    });
  }

  // async loginGoogle() {
  //   const provider = new firebase.default.auth.GoogleAuthProvider();
  //   try{
  //     await this.fireauth.signInWithPopup(provider);
  //     console.log(this.user_google);
  //     this.router.navigate(['home']);

  //   }catch(err){
  //     console.log(err);
  //   }
  // }

  async logout(){
    try{
      await this.fireauth.signOut();
      alert("sign out successfully !");
    }catch(err){
      alert("sigout failed !");
    }
  }

  async loginAcc(user:User){
    await this.HttpClient.post('http://127.0.0.1:8080/users/login',user)
    .subscribe((result)=>{
      console.warn("result",result)
    });
  }
}
