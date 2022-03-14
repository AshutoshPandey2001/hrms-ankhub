import { NgModule } from '@angular/core';
import { HumanResourceRoutingModule } from './human-resource-routing.module';
import { AllModule } from 'app/allModule.module';


@NgModule({
  declarations: [
  ],
  imports: [
    AllModule,
    HumanResourceRoutingModule
  ]
})
export class HumanResourceModule { }
