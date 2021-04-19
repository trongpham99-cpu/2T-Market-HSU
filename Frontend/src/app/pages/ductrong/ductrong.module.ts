import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DuctrongRoutingModule } from './ductrong-routing.module';
import { DuctrongComponent } from './ductrong.component';
import {TaiComponent} from '../../components/tai/tai.component';

@NgModule({
  declarations: [DuctrongComponent,TaiComponent],
  imports: [
    CommonModule,
    DuctrongRoutingModule
  ]
})
export class DuctrongModule { }
