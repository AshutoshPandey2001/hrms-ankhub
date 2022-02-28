import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo.component';
import { ShubhamDemoComponent } from './shubham-demo/shubham-demo.component';
const routes: Routes = [
  {
    path: '',
    component: DemoComponent,
    children: [
      {
        path: '',
        redirectTo: 'shubham-demo',
        pathMatch: 'full'
      },
      {
        path: 'shubham-demo', component: ShubhamDemoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }