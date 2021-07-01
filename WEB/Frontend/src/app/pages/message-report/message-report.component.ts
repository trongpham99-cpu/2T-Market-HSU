import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report.service'
import { Report } from '../../models/Report';
import { Profile } from '../../models/Profile';
import { Subscription } from "rxjs";
import { ActivatedRoute } from '@angular/router';
import {HttpClient,HttpErrorResponse,HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';

@Component({
  selector: 'app-message-report',
  templateUrl: './message-report.component.html',
  styleUrls: ['./message-report.component.css']
})
export class MessageReportComponent implements OnInit {
  id:any;
  reports: Report[] = [];
  product: Profile[] = [];
  userAccount:any;
  private profileSubscription: Subscription;
  constructor(public ReportService:ReportService,private HttpClient:HttpClient,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.userAccount = this.route.snapshot.params['userAccount'];
    this.getMess();
  }

  getMess(){
    this.ReportService.getReport(this.userAccount).subscribe((reports: Report[])=>{
      this.reports = reports;
      for(let i = 0; i<= reports.length; i++){
        this.ReportService.getProductId(reports[i].id_product).subscribe((product: Profile[])=>{
          this.product = product;
          console.log(product)
        })
      }
    });
  }

  async duyetSp(profile: Profile){
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type':'application/json'})
    }
    // const body = {id: profile._id}
    console.log(profile._id);
    let temp = await this.HttpClient.put('http://127.0.0.1:8080/api/user/message?id=' + profile._id,httpOptions).toPromise();
    window.location.reload();
    return temp;
  }

}
