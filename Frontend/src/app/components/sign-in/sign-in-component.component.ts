import { Router } from '@angular/router';
import { LoginsService } from '../../services/logins.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in-component',
  templateUrl: './sign-in-component.component.html',
  styleUrls: ['./sign-in-component.component.css']
})
export class SignInComponentComponent {

  ngOnInit(): void {
  }


  constructor(public LoginsService:LoginsService,private http:HttpClient,private cookieService: CookieService,private router:Router) { }

  onSubmit(data) {
    this.LoginsService.loginAcc(data);
    // console.log(data);
  }
}
