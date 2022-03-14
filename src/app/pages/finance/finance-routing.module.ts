import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceComponent } from './finance.component';

const routes: Routes = [
  {
    path: '',
    component: FinanceComponent,
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
export class FinanceRoutingModule { }
