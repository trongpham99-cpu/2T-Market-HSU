import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Profile } from '../models/Profile';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  baseUrl: string ="http://127.0.0.1:8080/users";
  productUrl: "http://127.0.0.1:8080/api"
  url: string = 'http://127.0.0.1:8080/'
  users : User[];
  profiles: Profile[];
  user: string;
  constructor(private http:HttpClient, private router: Router,private HttpClient:HttpClient) { }

  async daBanSp(profile: Profile){
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type':'application/json'})
    }
    console.log(profile._id);
    // const body = {id: profile._id}
    let temp = await this.HttpClient.put('http://127.0.0.1:8080/api/dabansp', {}, {params: {id: profile._id}}).toPromise();
    window.location.reload();
    return temp;
  }

  getDataUsers(){
    return this.http.get(this.baseUrl);
  }

  getDataUser(userAccount){
    return this.http.get("http://127.0.0.1:8080/user?userAccount=" + userAccount);
  }

  updateUser(id, user){
    const endpointUrl = 'http://127.0.0.1:8080/updateuser/?id='
    return this.http.put(endpointUrl + id, user);
  }

  

  onSubmit(postData) {
    this.http.post('http://127.0.0.1:8080/register',postData)
    .subscribe((result)=> {
      this.router.navigate(['/signin']);
    },(error:any) =>{
      alert("Tài khoản này đã có người sử dụng vui lòng chọn tài khoản khác !")
    });
  }
}

