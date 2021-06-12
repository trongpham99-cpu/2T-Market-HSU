import { AdminService } from './../../../services/admin.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { map } from 'rxjs/operators';
import { Profile } from 'src/app/models/Profile';
import { ProfileService } from 'src/app/services/profile.service';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';

@Component({
  selector: 'app-san-pham-dang-ban',
  templateUrl: './san-pham-dang-ban.component.html',
  styleUrls: ['./san-pham-dang-ban.component.css']
})
export class SanPhamDangBanComponent implements OnInit {

  profiles: Profile[] = [];
  private profileSubscription: Subscription;
  private profiles$ = new Subject<Profile[]>();
  constructor(public profilesService: ProfileService,private http: HttpClient,public AdminService:AdminService) { }

  ngOnInit(): void {
    this.getAdminPostChoDuyet();
  }

  nextPage(){
    this.page++
    console.log(this.page)
  }

  previousPage(){
    this.page--
  }

  public count = 0;price = 0;result=0;page = 1;
  getAdminPostChoDuyet(){
    this.http
          .get<{ getProductChoDuyet: Profile[] }>("http://127.0.0.1:8080/api/productwait?status=1&page="  + this.page)
          .pipe(
            map((profileData) => {
              return profileData.getProductChoDuyet;
            })
          )
          .subscribe((profiles) => {
            this.profiles = profiles;
            this.profiles$.next(this.profiles);
            for(let i=0; i<profiles.length;i++){
              this.count++
              this.price += parseFloat(profiles[i].productPrice);
            }
          });
  }
  downloadPdf(){
    const element = document.getElementById('table');

    html2canvas(element).then((canvas)=>{
      const imgData = canvas.toDataURL('image/png');
      const doc = new jspdf()
      const imgHeight = canvas.height * 280/canvas.width;
      doc.addImage(imgData,20,25,170,imgHeight);
      doc.save("report.pdf");
    })
  }
}
