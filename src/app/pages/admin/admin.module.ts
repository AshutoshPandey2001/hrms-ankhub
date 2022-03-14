import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AllModule } from 'app/allModule.module';


@NgModule({
  declarations: [
  ],
  imports: [
    AllModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
