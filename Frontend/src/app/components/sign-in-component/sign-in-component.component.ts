import { LoginsService } from './../../services/logins.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-sign-in-component',
  templateUrl: './sign-in-component.component.html',
  styleUrls: ['./sign-in-component.component.css']
})
export class SignInComponentComponent {

  onSubmit(postData) {
    this.http.post('http://127.0.0.1:8080/user/login',postData)
    .subscribe((result)=> {
      console.warn("result",result)
    });
  }

  constructor(public LoginsService:LoginsService,private http:HttpClient) { }


}
