import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelecallerComponent } from './telecaller.component';

const routes: Routes = [
  {
    path: '',
    component: TelecallerComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'shubham-demo',
      //   pathMatch: 'full'
      // },
      // {
      //   path: 'shubham-demo', component: SdkCompComponent
      // }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelecallerRoutingModule { }
