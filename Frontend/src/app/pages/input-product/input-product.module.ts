import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputProductRoutingModule } from './input-product-routing.module';
import { InputProductComponent } from './input-product.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../../components/input-product/input.component';

@NgModule({
  declarations: [InputProductComponent,InputComponent],
  imports: [
    CommonModule,
    InputProductRoutingModule,
    FormsModule
  ]
})
export class InputProductModule { }
