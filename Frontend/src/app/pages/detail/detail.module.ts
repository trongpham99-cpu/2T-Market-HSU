import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { ViewDetailComponent } from '../../components/detail-page/view-detail/view-detail.component'

@NgModule({
  declarations: [DetailComponent,ViewDetailComponent],
  imports: [
    CommonModule,
    DetailRoutingModule
  ]
})
export class DetailModule { }
