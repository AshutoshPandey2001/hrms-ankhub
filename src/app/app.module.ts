import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";
import { AppComponent } from "./app.component";
import { CommonLayoutComponent } from "./components/common-layout/common-layout.component";
import { BsModalService } from "ngx-bootstrap/modal";
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";
import { ToastrModule } from "ngx-toastr";
import { AllModule } from "./allModule.module";

@NgModule({
  imports: [
    AllModule,
    AppRoutingModule,
    ComponentsModule,
    SweetAlert2Module,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: "toast-top-right",
      preventDuplicates: false,
      progressBar: false,
      progressAnimation: "increasing",
    }),
  ],
  declarations: [AppComponent, CommonLayoutComponent],
  providers: [BsModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
