import { Component, OnInit } from '@angular/core';
import { SDK_ROUTES } from 'app/shared/route.interface';
export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  
  tabItems: any[];

  constructor() {
    this.tabItems = SDK_ROUTES.filter(tabItem => tabItem);
   }

  ngOnInit(): void {
  }

}
