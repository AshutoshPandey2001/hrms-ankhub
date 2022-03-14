import { Component, OnInit } from '@angular/core';
import { HR_ROUTES } from 'app/shared/route.interface';

@Component({
  selector: 'app-human-resource',
  templateUrl: './human-resource.component.html',
  styleUrls: ['./human-resource.component.scss']
})
export class HumanResourceComponent implements OnInit {

  tabItems: any[];

  constructor() {
    this.tabItems = HR_ROUTES.filter(tabItem => tabItem);
   }

  ngOnInit(): void {
  }


}
