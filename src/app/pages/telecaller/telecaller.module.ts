import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelecallerRoutingModule } from './telecaller-routing.module';
import { TelecallerComponent } from './telecaller.component';
import { AllModule } from 'app/allModule.module';


@NgModule({
  declarations: [
  ],
  imports: [
    AllModule,
    TelecallerRoutingModule
  ]
})
export class TelecallerModule { }
