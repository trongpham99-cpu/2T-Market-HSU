import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Category } from "../../../models/Category";
import { CategoriesService } from "src/app/services/categories.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { Subscription } from 'rxjs/internal/Subscription';
@Component({
  selector: 'app-input-category',
  templateUrl: './input-category.component.html',
  styleUrls: ['./input-category.component.css']
})
export class InputCategoryComponent implements OnInit {
  form: FormGroup;
  category: Category;
  imageData: string;
  categories: Category[]=[];
  private profileSubscription: Subscription;
  public count =0;
  constructor(private CategoriesService: CategoriesService,private http: HttpClient) { }

  ngOnInit() {
      this.form = new FormGroup({
      name: new FormControl(null),
      status:new FormControl(null),
      image: new FormControl(null),
    });
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

  onFileSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    this.CategoriesService.addCategory(
    this.form.value.name,
    this.form.value.status,
    this.form.value.image);
    this.form.reset();
    this.imageData = null;
  }

  async delete(category: Category){
    let temp = await this.http.delete('http://127.0.0.1:8080/api/deletecategory', {params: {id: category._id}}).toPromise();
    window.location.reload();
    return temp;
  }
  
  async turnOn(category: Category){
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type':'application/json'})
    }
    // const body = {id: profile._id}
    let temp = await this.http.put('http://127.0.0.1:8080/api/categoryon', {}, {params: {id: category._id}}).toPromise();
    window.location.reload();
    return temp;
  }

  async turnOff(category: Category){
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type':'application/json'})
    }
    // const body = {id: profile._id}
    let temp = await this.http.put('http://127.0.0.1:8080/api/categoryoff', {}, {params: {id: category._id}}).toPromise();
    window.location.reload();
    return temp;
  }

  async getAllCategoryAdmin() {
    await this.http
      .get<{ categories: Category[] }>('http://127.0.0.1:8080/api/getallcateogory')
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
