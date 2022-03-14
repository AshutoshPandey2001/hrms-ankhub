import { NgModule } from '@angular/core';
import { HumanResourceRoutingModule } from './human-resource-routing.module';
import { AllModule } from 'app/allModule.module';
import { PayslipComponent } from './payslip/payslip.component';


@NgModule({
  declarations: [
  
    PayslipComponent
  ],
  imports: [
    AllModule,
    HumanResourceRoutingModule
  ]
})
export class HumanResourceModule { }
