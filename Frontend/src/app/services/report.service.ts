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
  async getReport(){
    this.http
    .get<{ report: Report[] }>(this.baseUrl)
    .pipe(
      map((profileData) => {
        return profileData.report;
      })
    )
    .subscribe((profiles) => {
      this.report = profiles;
      this.report$.next(this.report);
    });
  }
  getProfilesStream() {
    return this.report$.asObservable();
  }

}
