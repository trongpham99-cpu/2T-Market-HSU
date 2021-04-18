import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Product } from '../../../models/product.model';
import {ProductsService} from '../../../services/products.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product: Product[]=[];

  constructor(private ProductsService:ProductsService){
    this.ProductsService.getData().subscribe((res :Product[])=>{
      this.product = res;
      console.log(res);
    })
  }
  ngOnInit(): void {
  }

}
