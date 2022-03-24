import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AllModule } from 'app/allModule.module';
import {  CoursesComponent } from './courses/courses.component';
import {  EmployeeComponent } from './employee/employee.component';
import { QualificationComponent } from './qualification/qualification.component';
import { GradeLevelComponent } from './grade-level/grade-level.component';
import { TechnologyComponent } from './technology/technology.component';
import { PositionComponent } from './position/position.component';


@NgModule({
  declarations: [
    CoursesComponent,
    EmployeeComponent,
    QualificationComponent,
    GradeLevelComponent,
    TechnologyComponent,
    PositionComponent
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