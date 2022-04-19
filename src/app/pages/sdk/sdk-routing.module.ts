import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalStructureComponent } from './final-structure/final-structure.component';
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
        redirectTo: 'layout-structure',
        pathMatch: 'full'
      },
      {
        path: 'layout-structure', component: FinalStructureComponent
      },
      {
        path: 'sdk-comp', component: SdkCompComponent
      },
      {
        path: 'sdk-icons', component: SdkIconsComponent
      },
      {
        path: 'sdk-plugins', component: SdkPluginsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SdkRoutingModule { }
