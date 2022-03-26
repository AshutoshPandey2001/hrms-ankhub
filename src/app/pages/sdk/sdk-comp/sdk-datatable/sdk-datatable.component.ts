import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sdk-datatable',
  templateUrl: './sdk-datatable.component.html',
  styleUrls: ['./sdk-datatable.component.scss']
})
export class SdkDatatableComponent implements OnInit {

  dataList:any;
  constructor(private http: HttpClient){
    //get request from web api
    this.http.get('https://www.testjsonapi.com/users/').subscribe(data => {
    
      this.dataList = data;
  
    setTimeout(()=>{   
      (<any>$('#datatableexample')).DataTable( {
        pagingType: 'full_numbers',
        pageLength: 5,
        processing: true,
        lengthMenu : [5, 10, 25]
    } );
    }, 1);
          }, error => console.error(error));
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  
  }


