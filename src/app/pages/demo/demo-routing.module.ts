import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnkitJDemoComponent } from './ankit-j-demo/ankit-j-demo.component';
import { DemoComponent } from './demo.component';
import { KarishmaDemoComponent } from './karishma-demo/karishma-demo.component';
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
        path: 'karishma-demo', component: KarishmaDemoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }