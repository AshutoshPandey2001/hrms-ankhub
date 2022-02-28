import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { ShubhamDemoComponent } from './shubham-demo/shubham-demo.component';
import { AnkitJDemoComponent } from './ankit-j-demo/ankit-j-demo.component';

@NgModule({
  declarations: [
    ShubhamDemoComponent,
    AnkitJDemoComponent
  ],
  imports: [
    DemoRoutingModule
  ]
})
export class DemoModule { }
