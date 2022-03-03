import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbhijeetDemoComponent } from './abhijeet-demo/abhijeet-demo.component';
import { AnkitJDemoComponent } from './ankit-j-demo/ankit-j-demo.component';
import { AshuDemoComponent } from './ashu-demo/ashu-demo.component';
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
      },
      {
        path: 'ankitJ-demo', component: AnkitJDemoComponent
      },
      {
        path: 'ashu-demo', component: AshuDemoComponent
      },
      {
        path: 'abhijeet-demo', component: AbhijeetDemoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }