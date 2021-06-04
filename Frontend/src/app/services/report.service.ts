import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { Observable, of, Subject } from "rxjs";
import { Body } from "@angular/http/src/body";
import {Report} from '../models/Report'

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private report: Report[] = [];
  private report$ = new Subject<Report[]>();
  constructor(private http:HttpClient) { }
  baseUrl = "http://127.0.0.1:8080/api/user/messages?nguoi_nhan=trong.phamtranduc";

  async postReport(postData) {
    await this.http.post('http://127.0.0.1:8080/register',postData)
    .subscribe((result)=> {
      console.log("result",result);
    });
  }

   getReport() {
    return  this.http.get(this.baseUrl)
    }
    getProductId(){
      return this.http.get('http://127.0.0.1:8080/api/productid?id=60b760110b77ee31b435d7d0');
    }

  getProfilesStream() {
    return this.report$.asObservable();
  }

}
