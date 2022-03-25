import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelecallerRoutingModule } from './telecaller-routing.module';
import { AllModule } from 'app/allModule.module';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { NotReceivedComponent } from './not-received/not-received.component';


@NgModule({
  declarations: [
  
    CandidateListComponent,
    NotReceivedComponent
  ],
  imports: [
    AllModule,
    TelecallerRoutingModule
  ]
})
export class TelecallerModule { }
