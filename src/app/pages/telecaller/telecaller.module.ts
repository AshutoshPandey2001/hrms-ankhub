import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelecallerRoutingModule } from './telecaller-routing.module';
import { AllModule } from 'app/allModule.module';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { IntrestedComponent } from './intrested/intrested.component';
import { NotReceivedComponent } from './not-received/not-received.component';
import { OnHoldComponent } from './on-hold/on-hold.component';
import { NotIntrestedComponent } from './not-intrested/not-intrested.component';
import { ScheduledComponent } from './scheduled/scheduled.component';

@NgModule({
  declarations: [
    CandidateListComponent,
    IntrestedComponent,
    ScheduledComponent,
    NotReceivedComponent,
    ScheduledComponent,
    OnHoldComponent,
    NotIntrestedComponent,
    ScheduledComponent
  ],
  
  imports: [
    AllModule,
    TelecallerRoutingModule,
   ]
})
export class TelecallerModule { }
