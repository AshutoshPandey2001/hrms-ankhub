import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HumanResourceComponent } from './human-resource.component';

const routes: Routes = [
  {
    path: '',
    component: HumanResourceComponent,
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
export class HumanResourceRoutingModule { }
