import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { ShubhamDemoComponent } from './shubham-demo/shubham-demo.component';

@NgModule({
  declarations: [
    ShubhamDemoComponent
  ],
  imports: [
    DemoRoutingModule
  ]
})
export class DemoModule { }
