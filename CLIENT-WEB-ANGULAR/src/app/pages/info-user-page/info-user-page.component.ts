import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service'
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '../../services/profile.service'
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { Subject, Subscription } from 'rxjs';
import { Profile } from 'src/app/models/Profile';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-info-user-page',
  templateUrl: './info-user-page.component.html',
  styleUrls: ['./info-user-page.component.css']
})
export class InfoUserPageComponent implements OnInit {
  public profile: any;
  userAccount:any;
  public data:User;
  public profileSubscription: Subscription;
  profiles: Profile[] = [];
  private profiles$ = new Subject<Profile[]>();
  constructor(public UsersService:UsersService,public profilesService:ProfileService,public route:ActivatedRoute,private http: HttpClient) { }


  ngOnInit(): void {
    this.userAccount = this.route.snapshot.params['userAccount'];
    this.getOne();
    this.getUserDaBan(this.userAccount);
    this.getUserPostDangBan(this.userAccount);
  }

  async getOne(){
    await this.UsersService.getDataUser(this.userAccount).subscribe(data =>{
      this.data =  data[0];
    })
  }

  public count = 0;price = 0;result;temp;
  async getUserDaBan(userAccount){
    await this.http
          .get<{ cart: Profile[] }>("https://server-2t-market-hsu-p27inhol4a-as.a.run.app/api/cart?nguoi_dang_sp="+userAccount+"&status=2")
          .pipe(
            map((profileData) => {
              return profileData.cart;
            })
          )
          .subscribe((profiles) => {
            this.profiles = profiles;
            console.log(profiles)
            this.profiles$.next(this.profiles);
            for(let i=0; i<profiles.length;i++){
              this.count++;
              this.price += parseInt(profiles[i].productPrice);
            }
            this.result = this.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          });
  }
  public count1 = 0;price1 = 0;
  profiles1: Profile[] = [];
  async getUserPostDangBan(userAccount){
    await this.http
          .get<{ cart: Profile[] }>("https://server-2t-market-hsu-p27inhol4a-as.a.run.app/api/cart?nguoi_dang_sp="+ userAccount+"&status=1")
          .pipe(
            map((profileData) => {
              return profileData.cart;
            })
          )
          .subscribe((profiles1) => {
            this.profiles1 = profiles1;
            this.profiles$.next(this.profiles);
            for(let i=0; i<profiles1.length;i++){
              this.count1++
              this.price1 += parseFloat(profiles1[i].productPrice);
            }
          });
  }

}
