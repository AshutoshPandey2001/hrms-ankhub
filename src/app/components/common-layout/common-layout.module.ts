import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonLayoutRoutingModule } from './common-layout.routing';
import { DashboardComponent } from 'app/pages/dashboard/dashboard.component';
import { UserProfileComponent } from 'app/pages/user-profile/user-profile.component';
import { TableListComponent } from 'app/pages/table-list/table-list.component';
import { IconsComponent } from 'app/pages/icons/icons.component';
import { NotificationsComponent } from 'app/pages/notifications/notifications.component';
import { TypographyComponent } from 'app/pages/typography/typography.component';
import { MaterialModule } from 'app/material.module';
import { DemoComponent } from 'app/pages/demo/demo.component';
import { EmployeeComponent } from 'app/pages/employee/employee.component';
@NgModule({
  declarations: [
    DemoComponent,
    EmployeeComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    // FormsModule,
    // ReactiveFormsModule,
    MaterialModule,
    CommonLayoutRoutingModule
  ]
})

export class CommonLayoutModule { }
