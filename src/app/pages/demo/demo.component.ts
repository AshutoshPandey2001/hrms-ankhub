import { Component, OnInit } from '@angular/core';
declare interface RouteInfo {
  path: string;
  label: string;
}
export const ROUTES: RouteInfo[] = [
  { path: 'shubham-demo', label: 'Shubham'},
  { path: 'ankitJ-demo', label: 'AnkitJ'},
  { path: 'abhay-demo', label: 'Abhay'},
  { path: 'mrunmayee-demo', label:'Mrunmayee'},
  { path: 'shraddha-demo', label: 'Shraddha'},
  { path: 'abhinav-demo', label: 'Abhinav'},
  { path: 'pooja-demo', label: 'Pooja'},
  { path: 'ashu-demo', label: 'Ashutosh'},
  { path: 'abhijeet-demo', label: 'Abhijeet'},
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
