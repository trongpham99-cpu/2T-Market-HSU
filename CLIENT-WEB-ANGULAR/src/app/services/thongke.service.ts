import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThongkeService {

  constructor(private http: HttpClient) { }

  getThongke(year,month){
    console.log(year,month)
    let temp =  this.http.get('https://server-2t-market-hsu-p27inhol4a-as.a.run.app/api/sanphamtrongngay?year='+ year +'&month=' + month)
    return temp;
  }

  getThongkeThang6(){
    return this.http.get('https://server-2t-market-hsu-p27inhol4a-as.a.run.app/api/sanphamtrongngay?year=2021&month=6')
  }

}
