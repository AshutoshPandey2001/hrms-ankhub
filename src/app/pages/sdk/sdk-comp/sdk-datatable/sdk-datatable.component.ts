import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sdk-datatable',
  templateUrl: './sdk-datatable.component.html',
  styleUrls: ['./sdk-datatable.component.scss']
})
export class SdkDatatableComponent implements OnInit {
  
  public dataList = [
    {name: 'Ajay', email: 'Ajay02@gmail.com', website:'Ajay02@gmail.com'},
    {name: 'Jasmindar', email: 'Jasmindar14@gmail.com', website:'Jasmindar14@gmail.com'},
    {name: 'Vijay', email: 'Vijay09@gmail.com', website:'Vijay09@gmail.com'},
    {name: 'Rajesh', email: 'Rajesh31@gmail.com', website:'Rajesh31@gmail.com'},
    {name: 'Jayesh', email: 'Jayesh27@gmail.com', website:'Jayesh27@gmail.com'},
    {name: 'Mahesh', email: 'Mahesh15@gmail.com', website:'Mahesh15@gmail.com'},
    {name: 'Kartik', email: 'Kartik20@gmail.com', website:'Kartik20@gmail.com'},
    {name: 'Pawan', email: 'Pawan22@gmail.com', website:'Pawan22@gmail.com'},
    {name: 'Nayan', email: 'Nayan30@gmail.com', website:'Nayan30@gmail.com'},
    {name: 'Pravin', email: 'Pravin1120@gmail.com', website:'Pravin1120@gmail.com'},
    {name: 'Joe', email: 'Joe21@gmail.com', website:'Joe21@gmail.com'},
    {name: 'Alan', email: 'Alan28@gmail.com', website:'Alan28@gmail.com'},
    {name: 'David', email: 'David04@gmail.com', website:'David04@gmail.com'},
    {name: 'Daniel', email: 'Daniel09@gmail.com', website:'Daniel09@gmail.com'},
    {name: 'Robert', email: 'Robert14@gmail.com', website:'Robert14@gmail.com'}
  ];

  dtOptions: DataTables.Settings = {};
  
  constructor(){
  }
  ngOnInit(): void {
    
      this.dtOptions = {
          pagingType: 'full_numbers',
          pageLength: 5,
        lengthMenu : [5, 10, 15],
          processing: true
        };
  }
  
}
  
  


