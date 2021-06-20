import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { map } from 'rxjs/operators';
import { Profile } from 'src/app/models/Profile';
import { ProfileService } from 'src/app/services/profile.service';
import { AdminService } from 'src/app/services/admin.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {
  profiles: Profile[] = [];
  profiles1: Profile[]=[];
  private profileSubscription: Subscription;
  userAccount:any;
  private profiles$ = new Subject<Profile[]>();
  constructor(public profilesService: ProfileService,private http: HttpClient,public route:ActivatedRoute,public UsersService :UsersService,public AdminService:AdminService) { }

  ngOnInit(): void {
    this.userAccount = this.route.snapshot.params['userAccount'];
    this.getUserPostChoDuyet(this.userAccount);
    this.getSanPhamDangTat(this.userAccount);
  }
  public count = 0;price = 0;
  getUserPostChoDuyet(userAccount){
    this.http
          .get<{ cart: Profile[] }>("http://127.0.0.1:8080/api/cart?nguoi_dang_sp="+ userAccount+"&status=1")
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
              this.price += parseFloat(profiles[i].productPrice);
            }
          });
  }

  async delete(profiles: Profile){
    let temp = await this.http.delete('http://127.0.0.1:8080/api/product', {params: {id: profiles._id}}).toPromise();
    window.location.reload();
    return temp;
  }

  getSanPhamDangTat(userAccount){
    this.http
    .get<{ cart: Profile[] }>("http://127.0.0.1:8080/api/cart?nguoi_dang_sp="+ userAccount+"&status=3")
    .pipe(
      map((profileData) => {
        return profileData.cart;
      })
    )
    .subscribe((profiles) => {
      this.profiles1 = profiles;
      this.profiles$.next(this.profiles1);
      console.log(this.profiles1)
    });
  }
}
