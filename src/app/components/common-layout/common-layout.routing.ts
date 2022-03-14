import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "app/pages/dashboard/dashboard.component";
import { UserProfileComponent } from "app/pages/user-profile/user-profile.component";
import { CommonLayoutComponent } from "./common-layout.component";

const routes: Routes = [
  {
    path: "",
    component: CommonLayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full",
      },
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "employee",
        loadChildren: () =>
          import(`../../pages/employee/employee.module`).then(
            (m) => m.EmployeeModule
          ),
      },
      {
        path: "sdk",
        loadChildren: () =>
          import(`../../pages/sdk/sdk.module`).then((m) => m.SdkModule),
      },
      {
        path: "user-profile",
        component: UserProfileComponent,
      }
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommonLayoutRoutingModule {}
