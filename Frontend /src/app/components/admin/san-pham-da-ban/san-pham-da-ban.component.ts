import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { map } from 'rxjs/operators';
import { Profile } from 'src/app/models/Profile';
import { ProfileService } from 'src/app/services/profile.service';


@Component({
  selector: 'app-san-pham-da-ban',
  templateUrl: './san-pham-da-ban.component.html',
  styleUrls: ['./san-pham-da-ban.component.css']
})
export class SanPhamDaBanComponent implements OnInit {

  profiles: Profile[] = [];
  private profileSubscription: Subscription;
  private profiles$ = new Subject<Profile[]>();
  constructor(public profilesService: ProfileService,private http: HttpClient) { }

  ngOnInit(): void {
    this.getAdminPostDaBan();
  }
  public count = 0;price = 0;result;
  getAdminPostDaBan(){
    this.http
          .get<{ getProductChoDuyet: Profile[] }>("http://127.0.0.1:8080/api/productwait?status=2")
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
              // this.arrProductPrice = this.profiles[i].productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              console.log(profiles[i].productPrice)
              this.price += parseInt(profiles[i].productPrice);
            }
            this.result = this.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          });
  }

}
