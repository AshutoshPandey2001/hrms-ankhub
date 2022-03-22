import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AllModule } from 'app/allModule.module';
import { CoursesComponent } from './courses/courses.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { QualificationComponent } from './qualification/qualification.component';
import { GradeLevelComponent } from './grade-level/grade-level.component';
import { TechnologyComponent } from './technology/technology.component';


@NgModule({
  declarations: [
    CoursesComponent,
    QualificationComponent,
    GradeLevelComponent,
    TechnologyComponent
  ],
  imports: [
    AllModule,
    AdminRoutingModule,
    Ng2SearchPipeModule
  ]
})
export class AdminModule { }
