import { CategoriesService } from './../../../services/categories.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from "src/app/models/Category";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[]=[];
  private profileSubscription: Subscription;
  public count =0;
  constructor(public CategoriesService:CategoriesService,private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllCategoryAdmin();
    this.profileSubscription = this.CategoriesService
      .getProfilesStream()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
        for(let i =0;i<categories.length;i++){
          this.count++
        }
      });
  }

  async delete(category: Category){
    let temp = await this.http.delete('https://server-2t-market-hsu-p27inhol4a-as.a.run.app/api/deletecategory', {params: {id: category._id}}).toPromise();
    window.location.reload();
    return temp;
  }
  
  async turnOn(category: Category){
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type':'application/json'})
    }
    // const body = {id: profile._id}
    let temp = await this.http.put('https://server-2t-market-hsu-p27inhol4a-as.a.run.app/api/categoryon', {}, {params: {id: category._id}}).toPromise();
    window.location.reload();
    return temp;
  }

  async turnOff(category: Category){
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type':'application/json'})
    }
    // const body = {id: profile._id}
    let temp = await this.http.put('https://server-2t-market-hsu-p27inhol4a-as.a.run.app/api/categoryoff', {}, {params: {id: category._id}}).toPromise();
    window.location.reload();
    return temp;
  }

  async getAllCategoryAdmin() {
    await this.http
      .get<{ categories: Category[] }>('https://server-2t-market-hsu-p27inhol4a-as.a.run.app/api/getallcateogory')
      .pipe(
        map((profileData) => {
          return profileData.categories;
        })
      )
      .subscribe((categories) => {
        this.categories = categories;
        console.log(categories);
      });
  }

  ngOnDestroy() {
    this.profileSubscription.unsubscribe();
  }

}
