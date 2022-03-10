import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoRoutingModule } from './demo-routing.module';
import { ShubhamDemoComponent } from './shubham-demo/shubham-demo.component';
import { AnkitJDemoComponent } from './ankit-j-demo/ankit-j-demo.component';
import { UtkarshaDemoComponent } from './utkarsha-demo/utkarsha-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AbhayDemoComponent } from './abhay-demo/abhay-demo.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ShraddhaDemoComponent } from './shraddha-demo/shraddha-demo.component';
import { AbhinavDemoComponent } from './abhinav-demo/abhinav-demo.component';
import { MrunmayeeDemoComponent } from './mrunmayee-demo/mrunmayee-demo.component';
import { PoojazadeComponent } from './poojazade/poojazade.component';
import { ShivaniComponent } from './shivani/shivani.component';
import { KajalDDemoComponent } from './kajal-d-demo/kajal-d-demo.component';
import { AshuDemoComponent } from './ashu-demo/ashu-demo.component';
import { AbhijeetDemoComponent } from './abhijeet-demo/abhijeet-demo.component';
import { MaterialModule } from 'app/material.module';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    ShubhamDemoComponent,
    AnkitJDemoComponent,
    UtkarshaDemoComponent,
    AbhayDemoComponent,
    MrunmayeeDemoComponent,
    ShraddhaDemoComponent,
    AbhinavDemoComponent,
    PoojazadeComponent,
    ShivaniComponent,
    KajalDDemoComponent,
    AshuDemoComponent,
    AbhijeetDemoComponent,  
  ],
 
  imports: [
    DemoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    Ng2SearchPipeModule,
    MaterialModule,
    NgxSpinnerModule ,
    BsDatepickerModule.forRoot(),
  ]  ,

  providers:[
    BsModalService
  ]
})
export class DemoModule { }