import { NgModule } from '@angular/core';
import { HumanResourceRoutingModule } from './human-resource-routing.module';
import { AllModule } from 'app/allModule.module';
import { PayslipComponent } from './payslip/payslip.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';


@NgModule({
  declarations: [
  
    PayslipComponent,
        LeaveRequestComponent
  ],
  imports: [
    AllModule,
    HumanResourceRoutingModule
  ]
})
export class HumanResourceModule { }
