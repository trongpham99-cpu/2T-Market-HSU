import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { ProfileService } from 'src/app/services/profile.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

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
  }

  getOne(){
    this.profilesService.getDetail(this.id).subscribe(data =>{
      this.data = data;
      console.log(data);
    })
  }

}
