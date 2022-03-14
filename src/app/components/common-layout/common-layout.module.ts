import { NgModule } from "@angular/core";
import { CommonLayoutRoutingModule } from "./common-layout.routing";
import { DashboardComponent } from "app/pages/dashboard/dashboard.component";
import { UserProfileComponent } from "app/pages/user-profile/user-profile.component";
import { EmployeeComponent } from "app/pages/employee/employee.component";
import { AllModule } from "app/allModule.module";
import { SdkComponent } from "app/pages/sdk/sdk.component";
@NgModule({
  declarations: [
    SdkComponent,
    EmployeeComponent,
    DashboardComponent,
    UserProfileComponent
  ],
  imports: [AllModule, CommonLayoutRoutingModule]
})
export class CommonLayoutModule {}
