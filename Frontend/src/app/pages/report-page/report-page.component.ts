import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProfileService } from 'src/app/services/profile.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css']
})
export class ReportPageComponent implements OnInit {

  product: Product;
  public profile: any;
  id:any;
  data:any;
  public profileSubscription: Subscription;
  constructor(private profilesService: ProfileService, public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getOne();
  }

  getOne(){
    this.profilesService.getDetail(this.id).subscribe(data =>{
      this.data = data;
      console.log(data);
    })
  }


}
