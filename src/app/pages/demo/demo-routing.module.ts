import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbhinavDemoComponent } from './abhinav-demo/abhinav-demo.component';
import { AnkitJDemoComponent } from './ankit-j-demo/ankit-j-demo.component';
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
        path: 'abhinav-demo', component: AbhinavDemoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }