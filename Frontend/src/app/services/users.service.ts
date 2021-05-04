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

  getDataUser(){
    return this.http.get(this.baseUrl);
  }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>("http://127.0.0.1:8080/user/?id=608c3e4bcca0d2594e873f2b");
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

  showUser = true;
  showProduct = true;
  suaSp = true;

  showIfUser() {
    this.showUser = !this.showUser;
  }

  showIfProduct() {
    this.showProduct = !this.showProduct;
  }
  showUpdate() {
    this.suaSp = !this.suaSp;
  }
}

