import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { OnHoldComponent } from './on-hold/on-hold.component';
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
        path: 'on-hold', component: OnHoldComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelecallerRoutingModule { }
