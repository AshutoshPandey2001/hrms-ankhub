import { Component, OnInit } from '@angular/core';
declare interface RouteInfo {
  path: string;
  label: string;
}
export const ROUTES: RouteInfo[] = [
  { path: 'shubham-demo', label: 'Shubham'},
  { path: 'ankitJ-demo', label: 'AnkitJ'},
  { path: 'abhay-demo', label: 'Abhay'},
  { path: 'shivani', label: 'Shivani'},
  { path: 'kajalD-demo', label: 'KajalD'},
  { path: 'ashu-demo', label: 'Ashutosh'}
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
