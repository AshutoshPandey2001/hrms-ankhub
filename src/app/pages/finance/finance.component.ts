import { Component, OnInit } from '@angular/core';
import { FINANCE_ROUTES } from 'app/shared/route.interface';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {

  tabItems: any[];

  constructor() {
    this.tabItems = FINANCE_ROUTES.filter(tabItem => tabItem);
   }

  ngOnInit(): void {
  }


}