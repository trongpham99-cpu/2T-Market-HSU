import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Profile } from '../models/Profile';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  baseUrl: string ="http://127.0.0.1:8080/users";
  users : User[];
  profiles: Profile[];
  user: string;
  constructor(private http:HttpClient, private router: Router,) { }

  getDataUsers(){
    return this.http.get(this.baseUrl);
  }

  getDataUser(userAccount){
    return this.http.get("http://127.0.0.1:8080/user?userAccount=" + userAccount);
}

  onSubmit(postData) {
    this.http.post('http://127.0.0.1:8080/register',postData)
    .subscribe((result)=> {
      if(result){
        this.router.navigate(['/signin']);
      }
      console.log("result",result);
    });
  }
}

