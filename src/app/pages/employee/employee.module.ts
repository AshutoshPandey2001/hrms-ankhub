import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { AllModule } from 'app/allModule.module';


@NgModule({
  declarations: [
  ],
  imports: [
    AllModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
