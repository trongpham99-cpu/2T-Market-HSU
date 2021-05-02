import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { ProfileService } from "src/app/services/profile.service";
import { CategoriesService } from "src/app/services/categories.service";
import { Profile } from "src/app/models/Profile";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Subject } from "rxjs";
import { Category } from "src/app/models/Category";
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
    // profiles: Profile[] = [];
    name:any;
    profiles: Profile[] = [] ;
    private profiles$ = new Subject<Profile[]>();
    readonly url = "http://127.0.0.1:8080/api";
    constructor(public profilesService: ProfileService,public CategoriesService:CategoriesService){
    }
    ngOnInit(): void {
      this.CategoriesService.getCategory(this.name);
    }
  
    ngOnDestroy() {
    }
}
