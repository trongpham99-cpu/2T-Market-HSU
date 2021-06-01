import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report.service'
import { Report } from '../../models/Report';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-message-report',
  templateUrl: './message-report.component.html',
  styleUrls: ['./message-report.component.css']
})
export class MessageReportComponent implements OnInit {
  id:any;
  reports: Report[] = [];
  private profileSubscription: Subscription;
  constructor(public ReportService:ReportService) { }

  ngOnInit(): void {
    this.ReportService.getReport();
    this.profileSubscription = this.ReportService
      .getProfilesStream()
      .subscribe((report: Report[]) => {
        this.reports = report;
        console.log(report);
      });
  }

}
