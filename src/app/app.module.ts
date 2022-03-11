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
import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
  SPINNER,
  POSITION,
  PB_DIRECTION,
} from "ngx-ui-loader";


@NgModule({
  imports: [
    AllModule,
    AppRoutingModule,
    ComponentsModule,
    SweetAlert2Module,
    BrowserAnimationsModule,
    NgxUiLoaderModule.forRoot({
      // bgsColor: "red",
      // bgsPosition: POSITION.bottomCenter,
      // bgsSize: 40,
      // bgsType: SPINNER.rectangleBounce, // background spinner type
      // fgsType: SPINNER.chasingDots, // foreground spinner type
      // pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
      // pbThickness: 5, // progress bar thickness
    }),
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: "toast-top-right",
      preventDuplicates: false,
      progressBar: false,
      progressAnimation: "increasing",
    })
  ],
  declarations: [AppComponent, CommonLayoutComponent],
  providers: [BsModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
