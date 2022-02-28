import { Component, OnInit } from '@angular/core';
declare interface RouteInfo {
  path: string;
  label: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/shubham-demo', label: 'Shubham'}
];

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  tabItems: any[];

  constructor() {
    this.tabItems = ROUTES.filter(tabItem => tabItem);
   }

  ngOnInit(): void {
  }

}
