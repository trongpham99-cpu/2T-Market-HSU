import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {
  id: string;

  constructor(public ProductsService:ProductsService) { }

  ngOnInit(): void {
    this.ProductsService.getProductDetail(this.id);
  }

}
