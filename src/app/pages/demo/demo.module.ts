import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { DemoRoutingModule } from './demo-routing.module';
import { ShubhamDemoComponent } from './shubham-demo/shubham-demo.component';
import { AnkitJDemoComponent } from './ankit-j-demo/ankit-j-demo.component';
import { MrunmayeeDemoComponent } from './mrunmayee-demo/mrunmayee-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ShivaniComponent } from './shivani/shivani.component';
import { KajalDDemoComponent } from './kajal-d-demo/kajal-d-demo.component';
import { AshuDemoComponent } from './ashu-demo/ashu-demo.component';

// import { Ng2SearchPipeModule } from "ng2-search-filter";

@NgModule({
  declarations: [
    ShubhamDemoComponent,
    AnkitJDemoComponent,
    MrunmayeeDemoComponent,
    ShivaniComponent,
    KajalDDemoComponent,
    AshuDemoComponent
  ],
  imports: [
    DemoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
    
    
  ],
 

  
})
export class DemoModule { }
