import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routingComponents,AdminRoutingModule } from './admin-routing.module'
import { AdminComponent } from './admin.component';


import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { BarChartComponent } from '../../components/admin/bar-chart/bar-chart.component';
@NgModule({
  declarations: [AdminComponent,routingComponents,BarChartComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AdminRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
  ]
})
export class AdminModule { }
