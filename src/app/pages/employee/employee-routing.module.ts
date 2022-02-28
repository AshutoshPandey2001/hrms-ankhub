import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShubhamDemoComponent } from '../demo/shubham-demo/shubham-demo.component';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: [
      {
        path: '',
        redirectTo: 'shubham-demo',
        pathMatch: 'full'
      },
      {
        path: 'shubham-demo', component: ShubhamDemoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
