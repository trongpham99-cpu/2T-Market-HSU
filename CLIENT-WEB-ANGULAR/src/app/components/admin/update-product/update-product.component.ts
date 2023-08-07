import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProfileService } from 'src/app/services/profile.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { FormGroup, FormControl } from "@angular/forms";
import { CategoriesService } from "src/app/services/categories.service";
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  form: FormGroup;
  product: Product;
  public profile: any;name;
  id:any;
  data:any;
  categories: Category[] = [];
  public profileSubscription: Subscription;
  constructor(public CategoriesService: CategoriesService,private profilesService: ProfileService, public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.CategoriesService.getAllCategory();
    this.profileSubscription = this.CategoriesService
      .getProfilesStream()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
      });
    this.id = this.route.snapshot.params['id'];
    this.getOne();
  }

  getOne(){
    this.profilesService.getDetail(this.id).subscribe(data =>{
      this.data = data;
    })
  }
  
  update(contactId){
    const newFormData = { productName:this.data.productName, productPrice: this.data.productPrice,productAddress:this.data.productAddress,
      description:this.data.description, loai_sp:this.data.loai_sp  };
    this.profilesService.updateProduct(contactId, newFormData).subscribe(data =>{
      alert("Sửa thành công !")
    },(error:any) =>{
      alert("Sửa thất bại !")
    });
  }

}
