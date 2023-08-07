import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report.service'
import { ActivatedRoute } from '@angular/router';
import {HttpClient,HttpErrorResponse,HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';

@Component({
  selector: 'app-phanhoi',
  templateUrl: './phanhoi.component.html',
  styleUrls: ['./phanhoi.component.css']
})
export class PhanhoiComponent implements OnInit {

  constructor(public ReportService:ReportService,private HttpClient:HttpClient,private route:ActivatedRoute) { }
  data:any;
  ngOnInit(): void {
    this.getSp();
  }

  getSp(){
    this.HttpClient.get('http://127.0.01:8080/api/admin/messages').subscribe(data=>{
      this.data = data;
    })
  }

}
