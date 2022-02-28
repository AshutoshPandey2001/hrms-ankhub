import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import(`./components/common-layout/common-layout.module`).then(m => m.CommonLayoutModule) },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
