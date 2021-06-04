import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoanhthuUserPageRoutingModule } from './doanhthu-user-page-routing.module';
import { DoanhthuUserPageComponent } from './doanhthu-user-page.component';


@NgModule({
  declarations: [DoanhthuUserPageComponent],
  imports: [
    CommonModule,
    DoanhthuUserPageRoutingModule
  ]
})
export class DoanhthuUserPageModule { }
