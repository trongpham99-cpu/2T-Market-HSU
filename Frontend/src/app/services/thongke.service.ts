import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThongkeService {

  constructor(private http: HttpClient) { }

  getThongke(year,month){
    console.log(year,month)
    let temp =  this.http.get('http://127.0.0.1:8080/api/sanphamtrongngay?year='+ year +'&month=' + month)
    return temp;
  }

  getThongkeThang6(){
    return this.http.get('http://127.0.0.1:8080/api/sanphamtrongngay?year=2021&month=6')
  }

}
