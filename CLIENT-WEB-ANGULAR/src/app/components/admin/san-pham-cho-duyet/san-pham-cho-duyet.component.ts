import { AdminService } from './../../../services/admin.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { map } from 'rxjs/operators';
import { Profile } from 'src/app/models/Profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-san-pham-cho-duyet',
  templateUrl: './san-pham-cho-duyet.component.html',
  styleUrls: ['./san-pham-cho-duyet.component.css']
})
export class SanPhamChoDuyetComponent implements OnInit {

  profiles: Profile[] = [];
  private profileSubscription: Subscription;
  private profiles$ = new Subject<Profile[]>();
  constructor(public profilesService: ProfileService,private http: HttpClient,public AdminService:AdminService) { }

  ngOnInit(): void {
    this.getAdminPostChoDuyet();
  }
  //delete san pham cho duyet
  async delete(profiles: Profile){
    let temp = await this.http.delete('https://server-2t-market-hsu-p27inhol4a-as.a.run.app/api/product', {params: {id: profiles._id}}).toPromise();
    window.location.reload();
    return temp;
  }

  public count = 0;price = 0;result=0;
  getAdminPostChoDuyet(){
    this.http
          .get<{ getProductChoDuyet: Profile[] }>("https://server-2t-market-hsu-p27inhol4a-as.a.run.app/api/productwait?status=0")
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
              console.log(this.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            }
          });
  }

}
