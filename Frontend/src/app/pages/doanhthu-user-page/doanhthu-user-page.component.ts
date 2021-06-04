import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Profile } from "src/app/models/Profile";
import { UsersService } from '../../services/users.service'
import { ProfileService } from '../../services/profile.service'
import { Subject, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-doanhthu-user-page',
  templateUrl: './doanhthu-user-page.component.html',
  styleUrls: ['./doanhthu-user-page.component.css']
})
export class DoanhthuUserPageComponent implements OnInit {
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
  }

  async getOne(){
    await this.UsersService.getDataUser(this.userAccount).subscribe(data =>{
      this.data =  data[0];
      console.log(data[0])
    })
  }

  public count = 0;price = 0;result;
  getUserDaBan(userAccount){
    this.http
          .get<{ cart: Profile[] }>("http://127.0.0.1:8080/api/cart?nguoi_dang_sp="+userAccount+"&status=2")
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
              this.count++
              this.price += parseInt(profiles[i].productPrice);
            }
            this.result = this.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          });
  }

}
