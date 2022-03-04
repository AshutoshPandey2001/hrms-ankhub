import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { DemoRoutingModule } from './demo-routing.module';
import { ShubhamDemoComponent } from './shubham-demo/shubham-demo.component';
import { AnkitJDemoComponent } from './ankit-j-demo/ankit-j-demo.component';
<<<<<<< HEAD
import { KarishmaDemoComponent } from './karishma-demo/karishma-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
import { ShivaniComponent } from './shivani/shivani.component';
import { KajalDDemoComponent } from './kajal-d-demo/kajal-d-demo.component';
import { AshuDemoComponent } from './ashu-demo/ashu-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { Ng2SearchPipeModule } from "ng2-search-filter";
>>>>>>> caf4b57245001dad2421eca9bc55f6a20192e94a

@NgModule({
  declarations: [
    ShubhamDemoComponent,
    AnkitJDemoComponent,
<<<<<<< HEAD
    KarishmaDemoComponent
  ],
  imports: [
    DemoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
=======
    ShivaniComponent,
    KajalDDemoComponent,
    AshuDemoComponent
    
  ],
  imports: [
    DemoRoutingModule,
    CommonModule ,
    FormsModule,
    ReactiveFormsModule

>>>>>>> caf4b57245001dad2421eca9bc55f6a20192e94a
  ]
  

  
})
export class DemoModule { }
