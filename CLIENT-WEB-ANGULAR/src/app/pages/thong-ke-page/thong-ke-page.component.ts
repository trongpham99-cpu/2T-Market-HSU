import { Component, OnInit } from '@angular/core';
import { ThongkeService } from '../../services/thongke.service'
import { Profile} from '../../models/Profile'
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-thong-ke-page',
  templateUrl: './thong-ke-page.component.html',
  styleUrls: ['./thong-ke-page.component.css']
})
export class ThongKePageComponent implements OnInit {

  constructor(public ThongkeService:ThongkeService,private http: HttpClient) { }
  public data: any;
  ngOnInit(): void {
  }
  public count=0;month;year;temp;
  async getData(month, year){
    console.log(month)
    let temp = await this.http.get('https://server-2t-market-hsu-p27inhol4a-as.a.run.app/api/sanphamtrongngay?year='+ year +'&month=' + month);
      await temp.subscribe(data=>{
      this.data = data;
      console.log(data);
      for(let i = 0;i<this.data.length;i++){
        this.count++;
        this.temp = this.data[i].productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        Object.assign(this.data[i], {price: this.temp });
      }
    })
  }

  fileName = 'ExcelSheet.xlsx';
  exportExcel():void{
    let element = document.getElementById('customers');
    const ws:XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb:XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,'Sheet1');
    XLSX.writeFile(wb,this.fileName);
  }
}
