import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { Observable, of, Subject } from "rxjs";
import { Body } from "@angular/http/src/body";
import { Report } from '../models/Report'
import { stringify } from "node:querystring";

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private report: Report[] = [];
  private report$ = new Subject<Report[]>();
  constructor(private http: HttpClient) { }
  baseUrl = "https://server-2t-market-hsu-p27inhol4a-as.a.run.app/api/user/messages?nguoi_nhan=";


  getReport(userAccount) {
    return this.http.get(this.baseUrl + userAccount)
  }
  getProductId(id_product) {
    return this.http.get('https://server-2t-market-hsu-p27inhol4a-as.a.run.app/api/productid?id='+ id_product);
  }

  getProfilesStream() {
    return this.report$.asObservable();
  }


}
