import { NgModule } from '@angular/core';
import { AllModule } from 'app/allModule.module';
import { SdkAlertComponent } from './sdk-comp/sdk-alert/sdk-alert.component';
import { SdkButtonComponent } from './sdk-comp/sdk-button/sdk-button.component';
import { SdkCompComponent } from './sdk-comp/sdk-comp.component';
import { SdkCrudComponent } from './sdk-comp/sdk-crud/sdk-crud.component';
import { SdkDatepickerComponent } from './sdk-comp/sdk-datepicker/sdk-datepicker.component';
import { SdkModalComponent } from './sdk-comp/sdk-modal/sdk-modal.component';
import { SdkMoreComponent } from './sdk-comp/sdk-more/sdk-more.component';
import { SdkSpinnerComponent } from './sdk-comp/sdk-spinner/sdk-spinner.component';
import { SdkToasterComponent } from './sdk-comp/sdk-toaster/sdk-toaster.component';
import { SdkRoutingModule } from './sdk-routing.module';
import { SdkPluginsComponent } from './sdk-plugins/sdk-plugins.component';
import { SdkIconsComponent } from './sdk-icons/sdk-icons.component';
import { SdkDatatableComponent } from './sdk-comp/sdk-datatable/sdk-datatable.component';

@NgModule({
  declarations: [
    SdkCompComponent,
    SdkButtonComponent,
    SdkModalComponent,
    SdkAlertComponent,
    SdkToasterComponent,
    SdkSpinnerComponent,
    SdkMoreComponent,
    SdkCrudComponent,
    SdkDatepickerComponent,
    SdkPluginsComponent,
    SdkIconsComponent,
    SdkDatatableComponent
  ],
  imports: [
    AllModule,
    SdkRoutingModule,
  ]  
})
export class SdkModule { }