import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbhayDemoComponent } from './abhay-demo/abhay-demo.component';
import { AbhijeetDemoComponent } from './abhijeet-demo/abhijeet-demo.component';
import { AnkitJDemoComponent } from './ankit-j-demo/ankit-j-demo.component';
import { DemoComponent } from './demo.component';
import { KarishmaDemoComponent } from './karishma-demo/karishma-demo.component';
import { MrunmayeeDemoComponent } from './mrunmayee-demo/mrunmayee-demo.component';
import { ShraddhaDemoComponent } from './shraddha-demo/shraddha-demo.component';
import { PoojazadeComponent } from './poojazade/poojazade.component';
import { ShivaniComponent } from './shivani/shivani.component';
import { KajalDDemoComponent } from './kajal-d-demo/kajal-d-demo.component';
import { ShubhamDemoComponent } from './shubham-demo/shubham-demo.component';
import { AbhinavDemoComponent } from './abhinav-demo/abhinav-demo.component';
import { AshuDemoComponent } from './ashu-demo/ashu-demo.component';
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
        
      },
      {
        path:'abhay-demo', component: AbhayDemoComponent
      },
      {
        path: 'kajalD-demo', component: KajalDDemoComponent
      },
      {
        path: 'abhinav-demo', component: AbhinavDemoComponent
      },
      {
        path: 'mrunmayee-demo', component: MrunmayeeDemoComponent
      },
      {
        path: 'shraddha-demo', component: ShraddhaDemoComponent
      },
      {
        path: 'pooja-demo', component: PoojazadeComponent
      },
      {
        path: 'ashu-demo', component: AshuDemoComponent
      },
      {
        path: 'abhijeet-demo', component: AbhijeetDemoComponent
      },
      {
        path: 'shivani', component: ShivaniComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
