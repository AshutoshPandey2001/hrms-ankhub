import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-final-structure',
  templateUrl: './final-structure.component.html',
  styleUrls: ['./final-structure.component.scss']
})
export class FinalStructureComponent implements OnInit {
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    }
  };
  constructor() { }

  ngOnInit(): void {
  }

  

}
