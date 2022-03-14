import { NgModule } from '@angular/core';
import { DemoRoutingModule } from './demo-routing.module';
import { ShubhamDemoComponent } from './shubham-demo/shubham-demo.component';
import { AllModule } from 'app/allModule.module';
import { SdkButtonComponent } from './shubham-demo/sdk-button/sdk-button.component';
import { SdkModalComponent } from './shubham-demo/sdk-modal/sdk-modal.component';
import { SdkAlertComponent } from './shubham-demo/sdk-alert/sdk-alert.component';
import { SdkToasterComponent } from './shubham-demo/sdk-toaster/sdk-toaster.component';
import { SdkSpinnerComponent } from './shubham-demo/sdk-spinner/sdk-spinner.component';
import { SdkMoreComponent } from './shubham-demo/sdk-more/sdk-more.component';
import { SdkCrudComponent } from './shubham-demo/sdk-crud/sdk-crud.component';
import { SdkDatepickerComponent } from './shubham-demo/sdk-datepicker/sdk-datepicker.component';



@NgModule({
  declarations: [
    ShubhamDemoComponent,
    SdkButtonComponent,
    SdkModalComponent,
    SdkAlertComponent,
    SdkToasterComponent,
    SdkSpinnerComponent,
    SdkMoreComponent,
    SdkCrudComponent,
    SdkDatepickerComponent
  ],

  imports: [
    AllModule,
    DemoRoutingModule,
  ]  
})
export class DemoModule { }