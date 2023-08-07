import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThongKePageRoutingModule } from './thong-ke-page-routing.module';
import { ThongKePageComponent } from './thong-ke-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ThongKePageComponent],
  imports: [
    CommonModule,
    ThongKePageRoutingModule,
    FormsModule
  ]
})
export class ThongKePageModule { }
