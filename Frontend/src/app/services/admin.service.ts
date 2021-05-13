import { Profile } from 'src/app/models/Profile';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient,HttpErrorResponse,HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import { httpFactory } from '@angular/http/src/http_module';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
public baseUrl = "http://127.0.0.1:8080/api/";
constructor(private router: Router,
  private HttpClient:HttpClient,) { }

  async duyetSp(id, updates){
  return await this.HttpClient.put("http://127.0.0.1:8080/api/duyetsp?id="+ id ,updates);
  }


}
