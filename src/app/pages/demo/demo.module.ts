import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { ShubhamDemoComponent } from './shubham-demo/shubham-demo.component';
import { AnkitJDemoComponent } from './ankit-j-demo/ankit-j-demo.component';
import { KajalDDemoComponent } from './kajal-d-demo/kajal-d-demo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShubhamDemoComponent,
    AnkitJDemoComponent,
    KajalDDemoComponent
  ],
  imports: [
    DemoRoutingModule,
    FormsModule,
    CommonModule
    
  ]
})
export class DemoModule { }
