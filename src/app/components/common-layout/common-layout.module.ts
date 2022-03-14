import { NgModule } from "@angular/core";
import { CommonLayoutRoutingModule } from "./common-layout.routing";
import { DashboardComponent } from "app/pages/dashboard/dashboard.component";
import { UserProfileComponent } from "app/pages/user-profile/user-profile.component";
import { EmployeeComponent } from "app/pages/employee/employee.component";
import { AllModule } from "app/allModule.module";
import { SdkComponent } from "app/pages/sdk/sdk.component";
import { AdminComponent } from "app/pages/admin/admin.component";
import { FinanceComponent } from "app/pages/finance/finance.component";
import { HumanResourceComponent } from "app/pages/human-resource/human-resource.component";
import { TelecallerComponent } from "app/pages/telecaller/telecaller.component";
@NgModule({
  declarations: [
    AdminComponent,
    FinanceComponent,
    HumanResourceComponent,
    TelecallerComponent,
    SdkComponent,
    UserProfileComponent,
    EmployeeComponent,
    DashboardComponent,
  ],
  imports: [AllModule, CommonLayoutRoutingModule]
})
export class CommonLayoutModule {}
