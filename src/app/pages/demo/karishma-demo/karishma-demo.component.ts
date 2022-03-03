import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-karishma-demo',
  templateUrl: './karishma-demo.component.html',
  styleUrls: ['./karishma-demo.component.scss']
})
export class KarishmaDemoComponent implements OnInit {

 employeeForm:FormGroup
 submitted:any=false;
  editoperation=false;
  selectedemp:any
  employeeList:any=[];

  constructor(private formBuilder:FormBuilder) {
    this.employeeForm = this.formBuilder.group ({
      Id:['', [Validators.required]],
      Name:['' , [Validators.required]],
      country:['', [Validators.required]],
      city:['',[Validators.required]],
      salary:['',[Validators.required]]

    })
    let empdata = localStorage.getItem('EMPLOYEE_LIST');
    if(empdata){
      this.employeeList = JSON.parse(empdata);
    }
  
   }

  ngOnInit(): void {
  }

  Save(){
    this.submitted=true;

    if(this.employeeForm.valid){
      this.employeeForm.value.id=this.id_random();
      this.employeeList.push(this.employeeForm.value)
      console.log("Submit Sucessfully",this.employeeForm.value);
      alert("Form is valid.... submitted Sucessfully...!")
   }
   else{
    alert("Form is not-valid.... please try again...!")
   }
    this.employeeForm.reset();
    localStorage.setItem("EMPLOYEE_LIST", JSON.stringify(this.employeeList))
  }

  Update(){
    this.editoperation=false;
   
    this.employeeList[this.selectedemp].Id=this.employeeForm.value.Id;
    this.employeeList[this.selectedemp].Name=this.employeeForm.value.Name;
    this.employeeList[this.selectedemp].country=this.employeeForm.value.country;
    this.employeeList[this.selectedemp].city=this.employeeForm.value.city;
    this.employeeList[this.selectedemp].salary=this.employeeForm.value.salary;
    this.clear()
  
    localStorage.setItem("EMPLOYEE_LIST", JSON.stringify(this.employeeList))
  }

  edit(index:any,obj:any){
    this.editoperation=true;
    //  this.selectedemp=this.employeeList.findIndex((x:any)=> x.id ===obj.id);
    console.log('this.selectedemployee', this.selectedemp)

    this.employeeForm.patchValue({
     Id: obj.Id,
     Name: obj.Name,
     country: obj.country,
     city: obj.city,
     salary: obj.salary
})
  }

  trash(index:any){
    //  this.selectedemp=this.employeeList.findIndex((x:any)=> x.id ===id);
    console.log("Delete",index);
    this.employeeList.splice(index,1)
  }
  get f(){
    return this.employeeForm.controls
  }
  
  clear(){
    this.employeeForm.reset();
  }

  id_random(){
    return '_' + Math.random().toString(36).substr(2,9);
  }
}
