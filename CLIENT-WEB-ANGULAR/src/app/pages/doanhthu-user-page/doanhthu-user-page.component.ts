import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Profile } from "src/app/models/Profile";
import { UsersService } from '../../services/users.service'
import { ProfileService } from '../../services/profile.service'
import { Subject, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
import * as XLSX from 'xlsx';
import { MultiDataSet } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-doanhthu-user-page',
  templateUrl: './doanhthu-user-page.component.html',
  styleUrls: ['./doanhthu-user-page.component.css']
})
export class DoanhthuUserPageComponent implements OnInit {
  fileName = 'ExcelSheet.xlsx';
  public profile: any;
  userAccount:any;
  public data:User;
  public profileSubscription: Subscription;
  profiles: Profile[] = [];
  private profiles$ = new Subject<Profile[]>();
  
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public a = 5;
  public pieChartLabels: Label[] = [['SciFi'], ['Drama'], 'Comedy'];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  
  constructor(public UsersService:UsersService,public profilesService:ProfileService,public route:ActivatedRoute,private http: HttpClient) { 
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    this.userAccount = this.route.snapshot.params['userAccount'];
    this.getOne();
    this.getUserDaBan(this.userAccount);
  }

  async getOne(){
    await this.UsersService.getDataUser(this.userAccount).subscribe(data =>{
      this.data =  data[0];
    })
  }

  public count = 0;price = 0;result;temp;
  public arr=[]
  public object = {};
  async getUserDaBan(userAccount){
    await this.http
          .get<{ cart: Profile[] }>("http://127.0.0.1:8080/api/cart?nguoi_dang_sp="+userAccount+"&status=2")
          .pipe(
            map((profileData) => {
              return profileData.cart;
            })
          )
          .subscribe((profiles) => {
            this.profiles = profiles;
            this.profiles$.next(this.profiles);
            for(let i=0; i<profiles.length;i++){
              this.count++;
              this.price += parseInt(profiles[i].productPrice);
              this.temp = profiles[i].productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              Object.assign(profiles[i], {pirce: this.temp });
            }
            console.log(profiles)
            this.result = this.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    });
  }
  public pieChartData: SingleDataSet = [this.count, 50, 20];


  public exportAsPDF()
  {
    const element = document.getElementById('customers');
    html2canvas(element).then((canvas)=>{
      const imgData = canvas.toDataURL('image/png');
      const doc = new jspdf()
      const imgHeight = canvas.height * 300/canvas.width;
      doc.addImage(imgData,20,40,170,imgHeight);
      doc.text('2T STORE',15,15);
      doc.text('Date:__/__/__',150,15);
      doc.text('SALES REPORT',85,30);
      doc.text('Signature',150,160);
      doc.save("report.pdf");
    })
  }

  exportExcel():void{
    let element = document.getElementById('customers');
    const ws:XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb:XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,'Sheet1');
    XLSX.writeFile(wb,this.fileName);
  }

}
