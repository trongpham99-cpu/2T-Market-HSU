import { ProfileService } from 'src/app/services/profile.service';
import { UsersService } from 'src/app/services/users.service';
import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { Profile } from 'src/app/models/Profile';
import { Subscription } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {

  public profile: any;
  id:any;
  data:any;
  dataUser:any;
  userAccount:any;
  public profileSubscription: Subscription;
  constructor(private profilesService: ProfileService, public route:ActivatedRoute,public UsersService:UsersService,private HttpClient:HttpClient){
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getOne();
  }
  disPlay = true;

  click(){
    this.disPlay = !this.disPlay;
  }

  async getOne(){
      await this.profilesService.getDetail(this.id).subscribe(data =>{
      this.data = data;
      this.HttpClient.get("http://127.0.0.1:8080/user?userAccount=" + this.data.nguoi_dang_sp).subscribe(user =>{
        this.dataUser = user[0];
      })
    })
  }
}
