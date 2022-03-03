import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shivani',
  templateUrl: './shivani.component.html',
  styleUrls: ['./shivani.component.scss']
})
export class ShivaniComponent implements OnInit {

  employee={
    name:'',
    position:'',
    type:''
 }

 employeeList:any=[];


 formvalue !: FormGroup; 
  isEditClicked: boolean;
 
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
  
    let employeeList=localStorage.getItem('employeeList') 
    console.log('employeeList',employeeList)
    if(employeeList)
    {
      this.employeeList=JSON.parse(employeeList)
    }

    this.formvalue = this.formbuilder.group({
      name : ['',Validators.required],
      position : ['',Validators.required],
      type :['',Validators.required],
    })
   
  };

  onSubmit() {
    this.employeeList.push(this.employee)
    this.employee={
      name:'',
      position:'',
      type:''
   }
    alert("Employee Added Successfully")
    this.formvalue.reset()
    localStorage.setItem('employeeList',JSON.stringify(this.employeeList))

  }

  onClickEdit(i: any){
    this.isEditClicked=true;
    this.employee=this.employeeList[i]
    localStorage.setItem('employeeList',JSON.stringify(this.employeeList))
  }

  onUpdate() {
    this.employee={
      name:'',
      position:'',
      type:''
   }
   this.isEditClicked=false
    this.formvalue.reset();
    
    localStorage.setItem('employeeList',JSON.stringify(this.employeeList))
  }

  onDelete(i: any) {
    this.employeeList.splice(i,1);
    alert("Employee Deleted")
    localStorage.setItem('employeeList',JSON.stringify(this.employeeList))
  }
 
 

}
