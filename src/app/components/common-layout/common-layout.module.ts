import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonLayoutRoutingModule } from "./common-layout.routing";
import { DashboardComponent } from "app/pages/dashboard/dashboard.component";
import { UserProfileComponent } from "app/pages/user-profile/user-profile.component";

import { IconsComponent } from "app/pages/icons/icons.component";
import { NotificationsComponent } from "app/pages/notifications/notifications.component";

import { MaterialModule } from "app/material.module";
import { DemoComponent } from "app/pages/demo/demo.component";
import { EmployeeComponent } from "app/pages/employee/employee.component";
import { AllModule } from "app/allModule.module";
@NgModule({
  declarations: [
    DemoComponent,
    EmployeeComponent,
    DashboardComponent,
    UserProfileComponent,
    IconsComponent,
    NotificationsComponent
  ],
  imports: [AllModule, CommonLayoutRoutingModule],
})
export class CommonLayoutModule {}
