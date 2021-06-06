import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProfileService } from 'src/app/services/profile.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  form: FormGroup;
  product: Product;
  public profile: any;
  id:any;
  data:any;
  public profileSubscription: Subscription;
  constructor(private profilesService: ProfileService, public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getOne();
    this.form = new FormGroup({
      productName: new FormControl(null),
      productPrice: new FormControl(null),
      description: new FormControl(null),
      productAddress: new FormControl(null),
      loai_sp: new FormControl(null),
    });
  }

  getOne(){
    this.profilesService.getDetail(this.id).subscribe(data =>{
      this.data = data;
    })
  }

  update(contactId){
    const newFormData = { productName:'2', productPrice:'1000000' };
    this.profilesService.updateProduct(contactId, newFormData).subscribe(data =>{
      this.data = data;
    });
  }

}
