import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public product: Product[]=[];

  constructor(public ProductsService:ProductsService,private route:ActivatedRoute) {   
    this.ProductsService.getDataProduct().subscribe((res :Product[])=>{
      console.log(res);
    })
  }
  

  ngOnInit(): void {
  }

}
