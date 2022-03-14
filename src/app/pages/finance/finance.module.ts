import { NgModule } from '@angular/core';
import { AllModule } from 'app/allModule.module';
import { FinanceRoutingModule } from './finance-routing.module';
import { SharesComponent } from './shares/shares.component';


@NgModule({
  declarations: [
  
    SharesComponent
  ],
  imports: [
    AllModule,
    FinanceRoutingModule
  ]
})
export class FinanceModule { }
