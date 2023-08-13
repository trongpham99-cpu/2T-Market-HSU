import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { profile } from 'node:console';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Profile } from 'src/app/models/Profile';
import { User } from 'src/app/models/user.model';
import { ProfileService } from 'src/app/services/profile.service';
import { UsersService } from '../../../services/users.service';
@Component({
  selector: 'app-thong-ke-doanh-thu',
  templateUrl: './thong-ke-doanh-thu.component.html',
  styleUrls: ['./thong-ke-doanh-thu.component.css']
})
export class ThongKeDoanhThuComponent implements OnInit {
  public countSpChoDuyet = 0; resultSpChoDuyet = 0;
  public user: User[]=[]; profiles:  Profile[] = [];a;
  private profiles$ = new Subject<Profile[]>();
  constructor( public UsersService:UsersService,
    public profilesService: ProfileService,private http: HttpClient,public route:ActivatedRoute ) {
    this.UsersService.getDataUsers().subscribe((res: User[])=>{
      this.user = res;
      for(let i = 0; i<res.length;i++){
        this.http
          .get<{ cart: Profile[] }>("https://server-2t-market-hsu-p27inhol4a-as.a.run.app/api/cart?nguoi_dang_sp="+ res[i].userAccount +"&status=0")
          .pipe(
            map((profileData) => {
              return profileData.cart;
            })
          )
          .subscribe((profiles) => {
            this.profiles = profiles;
            this.profiles$.next(this.profiles);
            console.log(profiles);
          });
      }
    });
   }
  ngOnInit(): void {
  }
}
