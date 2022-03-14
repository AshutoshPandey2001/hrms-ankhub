import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from "ngx-toastr";
import Swal from 'sweetalert2';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-mrunmayee-demo',
  templateUrl: './mrunmayee-demo.component.html',
  styleUrls: ['./mrunmayee-demo.component.scss']
})
export class MrunmayeeDemoComponent implements OnInit {

  
  employeeForm:FormGroup
  submitted:any=false; 
   editoperation=false;
  selectedobj:any;
  selectedindex:any;
   employeeList:any=[];
   showspinner = false;
   
  

  constructor(private formBuilder:FormBuilder,private toastr: ToastrService,private ngxService: NgxUiLoaderService) {
     this.employeeForm = this.formBuilder.group ({
      name:['', [Validators.required]],
      email:['' , [Validators.required,Validators.email]],
      mobile:['', [Validators.required,Validators.maxLength(10),]],
      dob:['',[Validators.required]],
      gender:['',[Validators.required]],
      qual:['',[Validators.required]]

     })
    let empdata = localStorage.getItem('EMPLOYEE_LIST');
    if(empdata){
      this.employeeList = JSON.parse(empdata);
    }
  
   }

  ngOnInit(): void {
    this.startSpinner(); 
  }
  

  submit(){
    this.submitted=true;
    

    if(this.employeeForm.valid){
      this.employeeList.push(this.employeeForm.value)
      console.log("Submit Sucessfully",this.employeeForm.value);
      this.ngxService.start(); 
      setTimeout(() => {
        this.ngxService.stop(); 
     
      this.toastr.success('Submitted!', 'Regisration Successfull!');
      
      let ref = document.getElementById('cancel')
    ref?.click();
  }, 1000);
   }
   else{
    this.toastr.error('Try Again!', 'Form is Invalid!');
   }
    this.employeeForm.reset();
   
    localStorage.setItem("EMPLOYEE_LIST", JSON.stringify(this.employeeList))
    this.clear();
  }

  Update(){
    this.editoperation=false;
    this.ngxService.start(); 
    setTimeout(() => {
      this.ngxService.stop();
    this.toastr.success('Submitted!', 'Update Successfully!');
    let ref = document.getElementById('cancel')
    ref?.click();
  }, 1000);
    this.employeeList[this.selectedindex].name=this.employeeForm.value.name;
    this.employeeList[this.selectedindex].email=this.employeeForm.value.email;
    this.employeeList[this.selectedindex].mobile=this.employeeForm.value.mobile;
    this.employeeList[this.selectedindex].dob=this.employeeForm.value.dob;
    this.employeeList[this.selectedindex].gender=this.employeeForm.value.gender;
    this.employeeList[this.selectedindex].qual=this.employeeForm.value.qual;
    this.clear();
    // this.startSpinner(); 
    localStorage.setItem("EMPLOYEE_LIST", JSON.stringify(this.employeeList))
  }

  edit(index:any,obj:any){
    this.editoperation=true;
    this.selectedindex=index;
    this.selectedobj=obj;
    console.log('this.selectedemployee', this.selectedobj)

    this.employeeForm.patchValue({
     name: obj.name,
     email: obj.email,
     mobile: obj.mobile,
     dob: obj.dob,
     gender: obj.gender,
     qual: obj.qual
})
  }

  delete(index:any){
    console.log("Delete",index);
   
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      allowEscapeKey: false,
      allowOutsideClick: false,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      showCancelButton: false,
      cancelButtonColor: '#d33',
      cancelButtonText:'Cancle'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
      this.employeeList.splice(index,1);
    })

    localStorage.setItem("EMPLOYEE_LIST", JSON.stringify(this.employeeList)) 
  }
 

  get f(){
    return this.employeeForm.controls
  }
  
  clear(){
    this.employeeForm.reset();
  }

  startSpinner(){
    this.ngxService.start(); 
    setTimeout(() => {
      this.ngxService.stop(); 
    }, 2000);
  }



}
