import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import {ActivatedRoute} from '@angular/router'
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  http: any;
  

  constructor(public ProductsService:ProductsService,private route:ActivatedRoute,private HttpClient:HttpClient) {   
  }
  

  ngOnInit(): void {
  }

}
