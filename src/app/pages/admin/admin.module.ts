import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AllModule } from 'app/allModule.module';
import { CoursesComponent } from './courses/courses.component';
import { GradeLevelComponent } from './grade-level/grade-level.component';


@NgModule({
  declarations: [
    CoursesComponent,
    GradeLevelComponent
  ],
  imports: [
    AllModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
