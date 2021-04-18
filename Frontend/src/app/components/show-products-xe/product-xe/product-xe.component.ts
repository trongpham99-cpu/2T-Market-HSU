import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import {ProductsService} from '../../../services/products.service';
@Component({
  selector: 'app-product-xe',
  templateUrl: './product-xe.component.html',
  styleUrls: ['./product-xe.component.css']
})
export class ProductXeComponent implements OnInit {
  public product_xe: Product[]=[];
  constructor(private ProductsService:ProductsService) {
    this.ProductsService.getData_xe().subscribe((res :Product[])=>{
      this.product_xe = res;
      console.log(res);
    })
   }
  ngOnInit(): void {
  }

}
