import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SdkCompComponent } from '../sdk/sdk-comp/sdk-comp.component';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'shubham-demo',
      //   pathMatch: 'full'
      // },
      // {
      //   path: 'shubham-demo', component: SdkCompComponent
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
