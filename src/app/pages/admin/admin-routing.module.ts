import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CoursesComponent } from './courses/courses.component';
import { EmployeeComponent } from './employee/employee.component';
import { QualificationComponent } from './qualification/qualification.component';
import { GradeLevelComponent } from './grade-level/grade-level.component';
import { TechnologyComponent } from './technology/technology.component';
import { PositionComponent } from './position/position.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full'
      },
      {
        path: 'courses', component: CoursesComponent
      },
      { 
        path: 'employee', component: EmployeeComponent
      },
      {
        path: 'qualification', component: QualificationComponent     
      },
      {
        path: 'position', component: PositionComponent
      },
      {
        path: 'technology', component: TechnologyComponent
      },
      {
        path: 'grade-level', component: GradeLevelComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
