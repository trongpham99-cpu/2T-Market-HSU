import { ProfileService } from 'src/app/services/profile.service';
import { UsersService } from 'src/app/services/users.service';
import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { Profile } from 'src/app/models/Profile';
import { Subscription } from 'rxjs';

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
  constructor(private profilesService: ProfileService, public route:ActivatedRoute,public UsersService:UsersService){
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getOne();
  }

  getOne(){
    this.profilesService.getDetail(this.id).subscribe(data =>{
      this.data = data;
    // this.UsersService.getDataUser(this.data.nguoi_dang_sp).subscribe(this.dataUser =>{
    //   this.dataUser = dataUser;
    // })
    console.log(this.data)

    })
  }

  
}
