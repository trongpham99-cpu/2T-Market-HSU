import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { Subject } from 'rxjs/internal/Subject';
import { Subscription } from 'rxjs/internal/Subscription';
import { Profile } from 'src/app/models/Profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-user-da-ban',
  templateUrl: './user-da-ban.component.html',
  styleUrls: ['./user-da-ban.component.css']
})
export class UserDaBanComponent implements OnInit {
  profiles: Profile[] = [];
  private profileSubscription: Subscription;
  private profiles$ = new Subject<Profile[]>();
  userAccount:any;
  constructor(public profilesService: ProfileService,private http: HttpClient,public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.userAccount = this.route.snapshot.params['userAccount'];
    this.getUserDaBan(this.userAccount);
  }
  public count = 0;price = 0;temp;
  getUserDaBan(userAccount){
    this.http
          .get<{ cart: Profile[] }>("https://server-2t-market-hsu-p27inhol4a-as.a.run.app/api/cart?nguoi_dang_sp="+userAccount+"&status=2")
          .pipe(
            map((profileData) => {
              return profileData.cart;
            })
          )
          .subscribe((profiles) => {
            this.profiles = profiles;
            this.profiles$.next(this.profiles);
            for(let i=0; i<profiles.length;i++){
              this.count++
              this.temp = profiles[i].productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              Object.assign(profiles[i], {price: this.temp });
            }
            console.log(profiles)
          });
  }
}
