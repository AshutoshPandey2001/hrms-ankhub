import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduled',
  templateUrl: './scheduled.component.html',
  styleUrls: ['./scheduled.component.scss']
})
export class ScheduledComponent implements OnInit {

  totalItems =6;
  constructor() { }

  ngOnInit(): void {
  }

}
