import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-abhinav-demo',
  templateUrl: './abhinav-demo.component.html',
  styleUrls: ['./abhinav-demo.component.scss']
})
export class AbhinavDemoComponent implements OnInit {

 

  isupdateA = false ;
  searchkey = '';
  
  empList : any = [];
  
  selectIndex:any;
  
  empForm : FormGroup;
  empsub = false;
    constructor(private formbuilder:FormBuilder) {
      this.empForm = formbuilder.group({
        empName : ['',[Validators .required , Validators.minLength(8)]],
        salary : ['',[Validators.required , Validators.minLength(5)]]
      })
      let data = localStorage.getItem('Employee_LIST');
      if(data){
        this.empList = JSON.parse(data);
      }
      }
  
  
    ngOnInit(): void {
    }
  
    empSubmit(){
  this.empsub = true;
  
  
  if (this.empForm.valid){
    this.empForm.value.id = this.randomID();
    this.empList.push(this.empForm.value)
    alert("Form is valid......submitted successfully !!!")
    localStorage.setItem("Employee_LIST", JSON.stringify(this.empList));
    console.log('Employee', this.empList);
    
    this.empClear()
  }
  else {
   alert("Form is invalid......please try again !!!")
  }
    }
  
    get f(){
      return this.empForm.controls
    }
  
  
  
  
  
  empEdit(obj:any){
    this.selectIndex= this.empList.findIndex((x : any )=> x.id === obj.id);
  
    this.isupdateA = true;
    this.empForm.patchValue({
      empName : obj.empName ,
      salary : obj.salary
    })
   
   
  }
  
  empUpdate(){
    this.empList[this.selectIndex].empName = this.empForm.value.empName;
    this.empList[this.selectIndex].salary = this.empForm.value.salary;
    localStorage.setItem("Employee_LIST", JSON.stringify(this.empList));
    this.empClear()
    this.isupdateA = false ;
    alert("Updated successfully")
  }
  
  empDelete(id:any){
    this.selectIndex= this.empList.findIndex((x : any )=> x.id === id);
  
    this.empList.splice(this.selectIndex,1);
    localStorage.setItem("Employee_LIST", JSON.stringify(this.empList));
  }
  
  empClear(){
  this.empForm.reset();
  }
  
  randomID()
  {
  return '_' + Math.random().toString(36).substr(2, 9);
  }

}
