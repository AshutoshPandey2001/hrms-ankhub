import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HumanResourceComponent } from './human-resource.component';
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
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HumanResourceRoutingModule { }
