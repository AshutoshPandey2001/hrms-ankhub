import { NgModule } from '@angular/core';
import { AllModule } from 'app/allModule.module';
import { FinanceRoutingModule } from './finance-routing.module';
import { SharesComponent } from './shares/shares.component';
import { AccountingreportComponent } from './accountingreport/accountingreport.component';


@NgModule({
  declarations: [
  
    SharesComponent,
        AccountingreportComponent
  ],
  imports: [
    AllModule,
    FinanceRoutingModule
  ]
})
export class FinanceModule { }
