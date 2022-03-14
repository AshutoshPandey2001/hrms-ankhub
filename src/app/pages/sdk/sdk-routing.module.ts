import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SdkCompComponent } from './sdk-comp/sdk-comp.component';
import { SdkIconsComponent } from './sdk-icons/sdk-icons.component';
import { SdkPluginsComponent } from './sdk-plugins/sdk-plugins.component';
import { SdkComponent } from './sdk.component';
const routes: Routes = [
  {
    path: '',
    component: SdkComponent,
    children: [
      {
        path: '',
        redirectTo: 'sdk-comp',
        pathMatch: 'full'
      },
      {
        path: 'sdk-comp', component: SdkCompComponent
      },
      {
        path: 'sdk-plugins', component: SdkPluginsComponent
      },
      {
        path: 'sdk-icons', component: SdkIconsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SdkRoutingModule { }
