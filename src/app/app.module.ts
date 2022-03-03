import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { CommonLayoutComponent } from './components/common-layout/common-layout.component';
import { BrowserModule } from '@angular/platform-browser';

import {
  AgmCoreModule
} from '@agm/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    // ReactiveFormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
<<<<<<< HEAD
    AgmCoreModule.forRoot({ 
=======
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
>>>>>>> caf4b57245001dad2421eca9bc55f6a20192e94a
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    CommonLayoutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
