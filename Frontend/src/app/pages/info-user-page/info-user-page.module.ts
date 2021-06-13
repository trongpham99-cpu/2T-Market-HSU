import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoUserPageRoutingModule } from './info-user-page-routing.module';
import { InfoUserPageComponent } from './info-user-page.component';


@NgModule({
  declarations: [InfoUserPageComponent],
  imports: [
    CommonModule,
    InfoUserPageRoutingModule
  ]
})
export class InfoUserPageModule { }
