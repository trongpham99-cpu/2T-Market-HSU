import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  form: FormGroup;
  product: Product;
  constructor(public ProductsService:ProductsService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null)
    });
  }

}
