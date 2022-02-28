import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'app/pages/dashboard/dashboard.component';
import { IconsComponent } from 'app/pages/icons/icons.component';
import { NotificationsComponent } from 'app/pages/notifications/notifications.component';
import { TableListComponent } from 'app/pages/table-list/table-list.component';
import { TypographyComponent } from 'app/pages/typography/typography.component';
import { UserProfileComponent } from 'app/pages/user-profile/user-profile.component';
import { CommonLayoutComponent } from './common-layout.component';

const routes: Routes = [
  {
    path: '',
    component: CommonLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'demo',
        pathMatch: 'full'
      },
      {
        path: 'demo',
        loadChildren: () => import(`../../pages/demo/demo.module`).then(m => m.DemoModule)
      },
      {
        path: 'employee',
        loadChildren: () => import(`../../pages/employee/employee.module`).then(m => m.EmployeeModule)
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'user-profile',
        component: UserProfileComponent
      },
      {
        path: 'table-list',
        component: TableListComponent
      },
      {
        path: 'typography',
        component: TypographyComponent
      },
      {
        path: 'icons',
        component: IconsComponent
      },
      {
        path: 'notifications',
        component: NotificationsComponent
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonLayoutRoutingModule { }

