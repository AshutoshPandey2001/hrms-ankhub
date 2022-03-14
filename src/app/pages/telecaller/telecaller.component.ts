import { Component, OnInit } from '@angular/core';
import { TELECALLER_ROUTES } from 'app/shared/route.interface';

@Component({
  selector: 'app-telecaller',
  templateUrl: './telecaller.component.html',
  styleUrls: ['./telecaller.component.scss']
})
export class TelecallerComponent implements OnInit {

  tabItems: any[];

  constructor() {
    this.tabItems = TELECALLER_ROUTES.filter(tabItem => tabItem);
   }

  ngOnInit(): void {
  }


}
