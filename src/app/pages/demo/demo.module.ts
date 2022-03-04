import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoRoutingModule } from './demo-routing.module';
import { ShubhamDemoComponent } from './shubham-demo/shubham-demo.component';
import { AnkitJDemoComponent } from './ankit-j-demo/ankit-j-demo.component';
import { ShivaniComponent } from './shivani/shivani.component';
import { KajalDDemoComponent } from './kajal-d-demo/kajal-d-demo.component';
import { AshuDemoComponent } from './ashu-demo/ashu-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AbhijeetDemoComponent } from './abhijeet-demo/abhijeet-demo.component';
// import { Ng2SearchPipeModule } from "ng2-search-filter";

@NgModule({
  declarations: [
    ShubhamDemoComponent,
    AnkitJDemoComponent,
    AshuDemoComponent,
    AbhijeetDemoComponent,
    ShivaniComponent,
    KajalDDemoComponent,
    AshuDemoComponent
    
  ],
  imports: [
    DemoRoutingModule,
    CommonModule ,
    FormsModule,
    ReactiveFormsModule
  ]
  
  
})
export class DemoModule { }
