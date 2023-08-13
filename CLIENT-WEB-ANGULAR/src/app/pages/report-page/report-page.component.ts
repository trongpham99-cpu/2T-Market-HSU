import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProfileService } from 'src/app/services/profile.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from '../../services/report.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css']
})
export class ReportPageComponent implements OnInit {

  product: Product;
  public profile: any;
  id:any;
  data:any;
  public profileSubscription: Subscription;
  constructor(private http: HttpClient,private profilesService: ProfileService, public route:ActivatedRoute,public ReportService:ReportService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getOne();
  }

  getOne(){
    this.profilesService.getDetail(this.id).subscribe(data =>{
      this.data = data;
    })
  }

  public tieu_de_text:string; noi_dung_text:string;
  async postMessage(){
    const report = {id_product:this.data._id,tieu_de:this.tieu_de_text,nguoi_nhan:this.data.nguoi_dang_sp,noi_dung:this.noi_dung_text};
    console.log(report);
    let endpointUrl = 'https://server-2t-market-hsu-p27inhol4a-as.a.run.app/api/admin/messages'
    this.http.post(endpointUrl, report).toPromise().then((data:any)=>{
        alert('Gửi Thành Công !!!')
    })
  }
}
