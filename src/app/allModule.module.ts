import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { BootstrapModule } from "./bootstrap.module";
import { MaterialModule } from "./material.module";

@NgModule({
  exports: [
    FormsModule,
    CommonModule,
    RouterModule,
    MaterialModule,
    BootstrapModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
  ],
})
export class AllModule {}
