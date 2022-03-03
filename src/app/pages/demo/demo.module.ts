import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { ShubhamDemoComponent } from './shubham-demo/shubham-demo.component';
import { AnkitJDemoComponent } from './ankit-j-demo/ankit-j-demo.component';
import { KarishmaDemoComponent } from './karishma-demo/karishma-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShubhamDemoComponent,
    AnkitJDemoComponent,
    KarishmaDemoComponent
  ],
  imports: [
    DemoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class DemoModule { }
