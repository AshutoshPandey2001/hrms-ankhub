import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AllModule } from 'app/allModule.module';
import { CoursesComponent } from './courses/courses.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    AllModule,
    AdminRoutingModule,
    Ng2SearchPipeModule
  ]
})
export class AdminModule { }
