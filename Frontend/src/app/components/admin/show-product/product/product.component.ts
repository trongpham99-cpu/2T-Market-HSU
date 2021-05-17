import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from "src/app/services/profile.service";
import { UsersService } from "src/app/services/users.service";
import { Profile } from "src/app/models/Profile";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  profiles: Profile[] = [];
  public count=0; price=0;
  private profileSubscription: Subscription;
  constructor(public profilesService: ProfileService,public UsersService:UsersService){
  }

  ngOnInit(): void {
    this.profilesService.getAllProductAdmin();
    this.profileSubscription = this.profilesService
      .getProfilesStream()
      .subscribe((profiles: Profile[]) => {
        this.profiles = profiles;
        for(let i =0; i<profiles.length;i++){
          this.count++;
          this.price = this.price + parseFloat(profiles[i].productPrice);
        }
      });
  }

  ngOnDestroy() {
    this.profileSubscription.unsubscribe();
  }

}
