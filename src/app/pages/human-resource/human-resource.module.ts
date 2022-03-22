import { NgModule } from '@angular/core';
import { HumanResourceRoutingModule } from './human-resource-routing.module';
import { AllModule } from 'app/allModule.module';
import { PayslipComponent } from './payslip/payslip.component';
import { EventOrganizationComponent } from './event-organization/event-organization.component';


@NgModule({
  declarations: [
  
    PayslipComponent,
        EventOrganizationComponent
  ],
  imports: [
    AllModule,
    HumanResourceRoutingModule
  ]
})
export class HumanResourceModule { }
