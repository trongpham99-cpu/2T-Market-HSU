import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrongtestRoutingModule } from './trongtest-routing.module';
import { TrongtestComponent } from './trongtest.component';
import { TaitestComponent } from '../../components/taitest/taitest.component';

@NgModule({
  declarations: [TrongtestComponent,TaitestComponent],
  imports: [
    CommonModule,
    TrongtestRoutingModule
  ]
})
export class TrongtestModule { }
