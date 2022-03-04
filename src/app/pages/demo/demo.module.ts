import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { DemoRoutingModule } from './demo-routing.module';
import { ShubhamDemoComponent } from './shubham-demo/shubham-demo.component';
import { AnkitJDemoComponent } from './ankit-j-demo/ankit-j-demo.component';
import { PoojazadeComponent } from './poojazade/poojazade.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ShivaniComponent } from './shivani/shivani.component';
import { KajalDDemoComponent } from './kajal-d-demo/kajal-d-demo.component';
import { AshuDemoComponent } from './ashu-demo/ashu-demo.component';

// import { Ng2SearchPipeModule } from "ng2-search-filter";

@NgModule({
  declarations: [
    ShubhamDemoComponent,
    AnkitJDemoComponent,
    PoojazadeComponent
  ],
  imports: [
    DemoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    Ng2SearchPipeModule,
    ShivaniComponent,
    KajalDDemoComponent,
    AshuDemoComponent
    
  ],
  
  

  
})
export class DemoModule { }
