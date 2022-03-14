import { Component, OnInit } from '@angular/core';
import { ADMIN_ROUTES } from 'app/shared/route.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

 
  tabItems: any[];

  constructor() {
    this.tabItems = ADMIN_ROUTES.filter(tabItem => tabItem);
   }

  ngOnInit(): void {
  }


}
