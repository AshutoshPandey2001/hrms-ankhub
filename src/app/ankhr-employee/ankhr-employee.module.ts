import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnkhrEmployeeRoutingModule } from './ankhr-employee-routing.module';
import { AnkhrEmployeeComponent } from '../ankhr-employee/ankhr-employee.component';


@NgModule({
  declarations: [
    AnkhrEmployeeComponent
  ],
  imports: [
    CommonModule,
    AnkhrEmployeeRoutingModule
  ]
})
export class AnkhrEmployeeModule { }
