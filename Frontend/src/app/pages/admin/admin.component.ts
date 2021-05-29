import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from 'src/app/models/Profile';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private UsersService:UsersService, private ProfileService:ProfileService,private http: HttpClient ) { }

  ngOnInit(): void {
    this.getDataUsers();
    this.getSpChoDuyet();
    this.getSpDaBan();
    this.getSpDangBan();
  }
  public user:any; choDuyet:any ; countUser = 0;countSpChoDyet = 0;

  async getDataUsers(){
    await this.UsersService.getDataUsers().subscribe(data =>{
      this.user = data;
      for(let i=0; i < this.user.length;i++){
        this.countUser++;
      }
    })
  }

  profiles1: Profile[] = [];
  private profiles$ = new Subject<Profile[]>();
  public priceSpChoDuyet=0;result;
  async getSpChoDuyet(){
    await this.http
          .get<{ getProductChoDuyet: Profile[] }>("http://127.0.0.1:8080/api/productwait?status=0")
          .pipe(
            map((profileData) => {
              return profileData.getProductChoDuyet;
            })
          )
          .subscribe((profiles) => {
            this.profiles1 = profiles;
            this.profiles$.next(this.profiles1);
            for(let i = 0; i<profiles.length;i++){
              this.countSpChoDyet = profiles.length;
              this.priceSpChoDuyet += parseFloat(profiles[i].productPrice)
            }
            return this.result = this.priceSpChoDuyet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          });
  }
  profiles2: Profile[] = [];
  private profiles2$ = new Subject<Profile[]>();
  public priceSpDaBan=0;resultDaBan;countDaBan = 0;
  async getSpDaBan(){
    await this.http
          .get<{ getProductChoDuyet: Profile[] }>("http://127.0.0.1:8080/api/productwait?status=2")
          .pipe(
            map((profileData) => {
              return profileData.getProductChoDuyet;
            })
          )
          .subscribe((profilesDaBan) => {
            this.profiles2 = profilesDaBan;
            this.profiles2$.next(this.profiles2);
            for(let i = 0; i<profilesDaBan.length;i++){
              this.countDaBan = profilesDaBan.length;
              this.priceSpDaBan += parseFloat(profilesDaBan[i].productPrice)
            }
            return this.resultDaBan = this.priceSpDaBan.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          });
  }

  profiles3: Profile[] = [];
  private profiles3$ = new Subject<Profile[]>();
  public priceSpDangBan=0;resultDangBan;countDangBan = 0;
  async getSpDangBan(){
    await this.http
          .get<{ getProductChoDuyet: Profile[] }>("http://127.0.0.1:8080/api/productwait?status=1")
          .pipe(
            map((profileData) => {
              return profileData.getProductChoDuyet;
            })
          )
          .subscribe((profilesDangBan) => {
            this.profiles2 = profilesDangBan;
            console.log(profilesDangBan)
            this.profiles2$.next(this.profiles2);
            for(let i = 0; i<profilesDangBan.length;i++){
              this.countDangBan = profilesDangBan.length;
              this.priceSpDangBan += parseFloat(profilesDangBan[i].productPrice)
            }
            return this.resultDangBan = this.priceSpDangBan.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          });
  }
 
}
