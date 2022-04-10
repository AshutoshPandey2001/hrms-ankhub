import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../employee';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   _url: string;

  constructor( private http : HttpClient) { 
    this._url = "/assets/data/employee.json";
  }

  getEmployee() : Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }



}
