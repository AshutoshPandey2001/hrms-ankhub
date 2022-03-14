import { Component, OnInit } from '@angular/core';
import { SDK_ROUTES } from 'app/shared/route.interface';
export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-sdk',
  templateUrl: './sdk.component.html',
  styleUrls: ['./sdk.component.scss']
})
export class SdkComponent implements OnInit {
  
  tabItems: any[];

  constructor() {
    this.tabItems = SDK_ROUTES.filter(tabItem => tabItem);
   }

  ngOnInit(): void {
  }

}
