import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventOrganizationComponent } from './event-organization/event-organization.component';
import { HumanResourceComponent } from './human-resource.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { PayslipComponent } from './payslip/payslip.component';

const routes: Routes = [
  {
    path: '',
    component: HumanResourceComponent,
    children: [
      {
        path: '',
        redirectTo: 'payslip',
        pathMatch: 'full'
      },
      {
        path: 'payslip', component: PayslipComponent
      },
      {
        path: 'event-organization', component: EventOrganizationComponent
      },
        {
        path:'leave-request', component: LeaveRequestComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HumanResourceRoutingModule { }
