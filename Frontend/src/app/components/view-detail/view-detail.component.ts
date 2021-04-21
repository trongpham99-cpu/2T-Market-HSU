import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {

  id:any;
  data:any;

  constructor(public ProductsService:ProductsService,private route : ActivatedRoute) {
  }

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.getOne();
  }

  getOne(){
    this.ProductsService.getOne(this.id).subscribe(data =>{
      this.data = data;
      console.log(data);
    })
  }

}
