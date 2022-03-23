import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AllModule } from 'app/allModule.module';
import {  CoursesComponent } from './courses/courses.component';
import {  EmployeeComponent } from './employee/employee.component';


@NgModule({
  declarations: [
    CoursesComponent,
    EmployeeComponent
    
  ],

  imports: [
    AllModule,
    AdminRoutingModule,
   
  ]
})
export class AdminModule { }


// BrowserModule,
// AppRoutingModule,
// FormsModule,
// ReactiveFormsModule,
// TagInputModule,
// Ng2SearchPipeModule