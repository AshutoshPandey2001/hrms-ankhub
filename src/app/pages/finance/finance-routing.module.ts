import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountingreportComponent } from './accountingreport/accountingreport.component';
import { FinanceComponent } from './finance.component';
import { SharesComponent } from './shares/shares.component';

const routes: Routes = [
  {
    path: '',
    component: FinanceComponent,
    children: [
      {
        path: '',
        redirectTo: 'shares',
        pathMatch: 'full'
      },
      {
        path: 'shares', component: SharesComponent
      }, 
      {
        path: 'accountingreport', component: AccountingreportComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
