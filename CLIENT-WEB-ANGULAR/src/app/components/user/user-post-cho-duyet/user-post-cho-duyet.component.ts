import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { map } from 'rxjs/operators';
import { Profile } from 'src/app/models/Profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-user-post-cho-duyet',
  templateUrl: './user-post-cho-duyet.component.html',
  styleUrls: ['./user-post-cho-duyet.component.css']
})
export class UserPostChoDuyetComponent implements OnInit {

  profiles: Profile[] = [];
  private profileSubscription: Subscription;
  userAccount:any;
  private profiles$ = new Subject<Profile[]>();
  constructor(public profilesService: ProfileService,private http: HttpClient,public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.userAccount = this.route.snapshot.params['userAccount'];
    this.getUserPostChoDuyet(this.userAccount);
  }
  public count = 0;price = 0;temp;
  getUserPostChoDuyet(userAccount){
    this.http
          .get<{ cart: Profile[] }>("http://127.0.0.1:8080/api/cart?nguoi_dang_sp="+ userAccount+"&status=0")
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
              this.temp = profiles[i].productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              Object.assign(profiles[i], {price: this.temp });
            }
          });
  }
  async delete(profiles: Profile){
    let temp = await this.http.delete('http://127.0.0.1:8080/api/product', {params: {id: profiles._id}}).toPromise();
    window.location.reload();
    return temp;
  }

}
