import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoRoutingModule } from './demo-routing.module';
import { ShubhamDemoComponent } from './shubham-demo/shubham-demo.component';
import { AnkitJDemoComponent } from './ankit-j-demo/ankit-j-demo.component';
import { KarishmaDemoComponent } from './karishma-demo/karishma-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShivaniComponent } from './shivani/shivani.component';
import { KajalDDemoComponent } from './kajal-d-demo/kajal-d-demo.component';
import { AshuDemoComponent } from './ashu-demo/ashu-demo.component';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { UtkarshaDemoComponent } from './utkarsha-demo/utkarsha-demo.component';
import { AbhayDemoComponent } from './abhay-demo/abhay-demo.component';
import { ShraddhaDemoComponent } from './shraddha-demo/shraddha-demo.component';
import { AbhinavDemoComponent } from './abhinav-demo/abhinav-demo.component';
import { MrunmayeeDemoComponent } from './mrunmayee-demo/mrunmayee-demo.component';
import { PoojazadeComponent } from './poojazade/poojazade.component';
import { AbhijeetDemoComponent } from './abhijeet-demo/abhijeet-demo.component';
import { MaterialModule } from 'app/material.module';



@NgModule({
  declarations: [
    ShubhamDemoComponent,
    AnkitJDemoComponent,
    KarishmaDemoComponent,
    UtkarshaDemoComponent,
    AbhayDemoComponent,
    MrunmayeeDemoComponent,
    ShraddhaDemoComponent,
    AbhinavDemoComponent,
    PoojazadeComponent,
    ShivaniComponent,
    KajalDDemoComponent,
    AshuDemoComponent,
    AbhijeetDemoComponent
  ],

  imports: [
    DemoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    Ng2SearchPipeModule,
    MaterialModule
  ],

})
export class DemoModule { }