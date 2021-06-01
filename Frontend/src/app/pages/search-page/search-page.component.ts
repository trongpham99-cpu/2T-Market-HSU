import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service'
import { Profile } from '../../models/Profile'
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(public ProfileService:ProfileService,private router:Router) { }
  public count=0;
  ngOnInit(): void {
    this.getProduct();
  }
  profiles: Profile[] = [];
   getProduct(){
     this.ProfileService.getSearch().subscribe((profiles: Profile[]) => {
        this.profiles = profiles;
        for(let i = 0; i<profiles.length;i++){
          this.count++
        }
      });
  }
}