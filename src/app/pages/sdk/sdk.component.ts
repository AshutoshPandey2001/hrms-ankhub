import { Component, OnInit } from '@angular/core';
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
  
  constructor() {
   }

  ngOnInit(): void {
  }

}
