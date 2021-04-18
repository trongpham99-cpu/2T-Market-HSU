import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service'
import { HttpClient } from '@angular/common/http'
import { Product } from '../../models/product.model'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [ProductsService]
})

export class InputComponent implements OnInit {

  onSubmit(postData) {
    this.http.post('http://127.0.0.1:8080/products',postData)
    .subscribe((result)=> {
      console.warn("result",result)
    });
  }
  product : Product;
  constructor(private productService: ProductsService,private http:HttpClient) { }
  ngOnInit(): void {
  }
}
