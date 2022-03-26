import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { NotIntrestedComponent } from './not-intrested/not-intrested.component';
import { ScheduledComponent } from './scheduled/scheduled.component';
import { TelecallerComponent } from './telecaller.component';

const routes: Routes = [
  {
    path: '',
    component: TelecallerComponent,
    children: [
      {
        path: '',
        redirectTo: 'candidate-list',
        pathMatch: 'full'
      },
      {
        path: 'candidate-list', component: CandidateListComponent
      },
      {
        path: 'not-intrested', component: NotIntrestedComponent
      },
      {
        path: 'scheduled', component: ScheduledComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelecallerRoutingModule { }
