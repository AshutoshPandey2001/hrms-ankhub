import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbhinavDemoComponent } from './abhinav-demo/abhinav-demo.component';
import { AnkitJDemoComponent } from './ankit-j-demo/ankit-j-demo.component';
import { AshuDemoComponent } from './ashu-demo/ashu-demo.component';
import { DemoComponent } from './demo.component';
import { ShivaniComponent } from './shivani/shivani.component';
import { KajalDDemoComponent } from './kajal-d-demo/kajal-d-demo.component';
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
       
      },
      {
        path: 'shivani', component: ShivaniComponent
      },
      {
        path: 'kajalD-demo', component: KajalDDemoComponent
      },
       {
          path: 'ashu-demo', component: AshuDemoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }