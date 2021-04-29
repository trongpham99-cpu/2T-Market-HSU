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

  public profiles: Profile[] ;
  id:any;
  public profileSubscription: Subscription;
  constructor(public profilesService: ProfileService){
  }
  ngOnInit(): void {
    this.profilesService.click(this.id);
    this.profileSubscription = this.profilesService
      .getProfilesStream()
      .subscribe((profiles: Profile[]) => {
        this.profiles = profiles;
        // console.log(profiles);
      });
  }

  ngOnDestroy() {
    this.profileSubscription.unsubscribe();
  }


}