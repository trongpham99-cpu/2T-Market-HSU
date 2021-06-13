import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report.service'
import { Report } from '../../models/Report';
import { Profile } from '../../models/Profile';
import { Subscription } from "rxjs";
import { ActivatedRoute } from '@angular/router';

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
  constructor(public ReportService:ReportService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.userAccount = this.route.snapshot.params['userAccount'];
    this.ReportService.getReport(this.userAccount).subscribe((reports: Report[])=>{
      this.reports = reports;
      for(let i = 0; i<= reports.length; i++){
        this.ReportService.getProductId(reports[i].id_product).subscribe((product: Profile[])=>{
          this.product = product;
        })
      }
    });
  }
}
