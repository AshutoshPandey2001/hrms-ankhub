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
        redirectTo: "admin",
        pathMatch: "full",
      },
      {
        path: "admin",
        loadChildren: () =>
          import(`../../pages/admin/admin.module`).then((m) => m.AdminModule),
      },
      {
        path: "human-resource",
        loadChildren: () =>
          import(`../../pages/human-resource/human-resource.module`).then(
            (m) => m.HumanResourceModule
          ),
      },
      {
        path: "telecaller",
        loadChildren: () =>
          import(`../../pages/telecaller/telecaller.module`).then(
            (m) => m.TelecallerModule
          ),
      },
      {
        path: "finance",
        loadChildren: () =>
          import(`../../pages/finance/finance.module`).then(
            (m) => m.FinanceModule
          ),
      },
      {
        path: "user-profile",
        component: UserProfileComponent,
      },
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "sdk",
        loadChildren: () =>
          import(`../../pages/sdk/sdk.module`).then((m) => m.SdkModule),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommonLayoutRoutingModule {}
