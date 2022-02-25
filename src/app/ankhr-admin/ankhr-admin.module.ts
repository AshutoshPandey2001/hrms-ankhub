import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnkhrAdminRoutingModule } from './ankhr-admin-routing.module';
import { AnkhrAdminComponent } from '../ankhr-admin/ankhr-admin.component';


@NgModule({
  declarations: [
    AnkhrAdminComponent
  ],
  imports: [
    CommonModule,
    AnkhrAdminRoutingModule
  ]
})
export class AnkhrAdminModule { }
