import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AllModule } from 'app/allModule.module';
import { CoursesComponent } from './courses/courses.component';
import { TechnologyComponent } from './technology/technology.component';
import { PositionComponent } from './position/position.component';


@NgModule({
  declarations: [
    CoursesComponent,
    TechnologyComponent,
    PositionComponent
  ],
  imports: [
    AllModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
