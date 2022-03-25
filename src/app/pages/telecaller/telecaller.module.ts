import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelecallerRoutingModule } from './telecaller-routing.module';
import { TelecallerComponent } from './telecaller.component';
import { AllModule } from 'app/allModule.module';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { NotIntrestedComponent } from './not-intrested/not-intrested.component';


@NgModule({
  declarations: [
  
    CandidateListComponent,
    NotIntrestedComponent
  ],
  imports: [
    AllModule,
    TelecallerRoutingModule
  ]
})
export class TelecallerModule { }
