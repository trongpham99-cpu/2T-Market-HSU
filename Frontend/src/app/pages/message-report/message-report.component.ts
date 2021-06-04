import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report.service'
import { Report } from '../../models/Report';
import { Profile } from '../../models/Profile';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-message-report',
  templateUrl: './message-report.component.html',
  styleUrls: ['./message-report.component.css']
})
export class MessageReportComponent implements OnInit {
  id:any;
  reports: Report[] = [];
  product: Profile[] = [];
  private profileSubscription: Subscription;
  constructor(public ReportService:ReportService) { }

  ngOnInit(): void {
    this.ReportService.getReport().subscribe((reports: Report[])=>{
      this.reports = reports;
      console.log(reports)
    });
    this.ReportService.getProductId().subscribe((product: Profile[])=>{
      this.product = product;
    })
  }
}
