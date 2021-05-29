import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routingComponents,AdminRoutingModule } from './admin-routing.module'
import { AdminComponent } from './admin.component';
import {MatIconModule} from '@angular/material/icon';

import {MatButtonModule} from '@angular/material/button';
import { MatMenuModule} from '@angular/material/menu'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { BarChartComponent } from '../../components/admin/bar-chart/bar-chart.component';
import {MatTableModule} from '@angular/material/table';
import { NgApexchartsModule } from "ng-apexcharts";
// For MDB Angular Free
// For MDB Angular Pro
import { ChartsModule, ChartSimpleModule, WavesModule } from 'ng-uikit-pro-standard'
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
    MatTableModule,
    NgApexchartsModule,ChartsModule, ChartSimpleModule, WavesModule
  ]
})
export class AdminModule { }
