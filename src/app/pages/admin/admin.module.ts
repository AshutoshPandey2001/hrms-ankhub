import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AllModule } from 'app/allModule.module';
import { CoursesComponent } from './courses/courses.component';
import { QualificationComponent } from './qualification/qualification.component';
import { TechnologyComponent } from './technology/technology.component';


@NgModule({
  declarations: [
    CoursesComponent,
    QualificationComponent
    TechnologyComponent
  ],
  imports: [
    AllModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
