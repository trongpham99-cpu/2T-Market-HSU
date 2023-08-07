import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhanhoiRoutingModule } from './phanhoi-routing.module';
import { PhanhoiComponent } from './phanhoi.component';


@NgModule({
  declarations: [PhanhoiComponent],
  imports: [
    CommonModule,
    PhanhoiRoutingModule
  ]
})
export class PhanhoiModule { }
