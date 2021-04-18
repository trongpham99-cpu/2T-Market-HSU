import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './../../../../models/product.model';
import { ProductsService } from './../../../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product: Product[]=[];

  constructor(public ProductsService:ProductsService,public HttpClient:HttpClient) {
    this.ProductsService.getData().subscribe((res: Product[])=>{
      this.product = res;
      console.log(res);
    });

  }

  onDelete(id) {
    this.ProductsService.delProduct(id);
  }

  ngOnInit(): void {
  }

}
