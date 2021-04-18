import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(public ProductsService:ProductsService) { }

  ngOnInit(): void {
  }

  // onSubmit(id, product) {
  //   this.ProductsService.updateProduct(id, product);
  // }

}
