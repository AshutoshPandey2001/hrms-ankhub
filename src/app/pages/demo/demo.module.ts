import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { DemoRoutingModule } from './demo-routing.module';
import { ShubhamDemoComponent } from './shubham-demo/shubham-demo.component';
import { AnkitJDemoComponent } from './ankit-j-demo/ankit-j-demo.component';
import { ShivaniComponent } from './shivani/shivani.component';

@NgModule({
  declarations: [
    ShubhamDemoComponent,
    AnkitJDemoComponent,
    ShivaniComponent,
    
  ],
  imports: [
    DemoRoutingModule,
    CommonModule ,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class DemoModule { }
