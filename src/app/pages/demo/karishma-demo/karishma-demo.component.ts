import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-karishma-demo',
  templateUrl: './karishma-demo.component.html',
  styleUrls: ['./karishma-demo.component.scss']
})
export class KarishmaDemoComponent implements OnInit {

 employeeForm:FormGroup
  submitted:any=false;
   editoperation=false;
  selectedobj:any;
  selectedindex:any;
   employeeList:any=[];

  

  constructor(private formBuilder:FormBuilder,private toastr: ToastrService,private ngxService: NgxUiLoaderService) {
     this.employeeForm = this.formBuilder.group ({
      name:['', [Validators.required]],
      email:['' , [Validators.required,Validators.email]],
      mobile:['', [Validators.required,Validators.maxLength(11),]],
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
  }

  Save(){
    this.submitted=true;
    {
      this.ngxService.start(); 
      setTimeout(() => {
        this.ngxService.stop(); 
      }, 2000);
    }
    if(this.employeeForm.valid){
      this.employeeList.push(this.employeeForm.value)
      console.log("Submit Sucessfully",this.employeeForm.value);
      this.toastr.success('Form is valid', ' Submitted sucessfully...!');
      let ref = document.getElementById('cancel')
      ref?.click();
     
   }
   else{
    this.toastr.error('Form is not valid', 'Please try again...!');
   }
    this.employeeForm.reset();

    localStorage.setItem("EMPLOYEE_LIST", JSON.stringify(this.employeeList))
  }

  Update(){
    {
      this.ngxService.start(); 
      setTimeout(() => {
        this.ngxService.stop(); 
      }, 2000);
    }
    this.editoperation=false;
    let ref = document.getElementById('cancel')
    ref?.click();
    this.employeeList[this.selectedindex].name=this.employeeForm.value.name;
    this.employeeList[this.selectedindex].email=this.employeeForm.value.email;
    this.employeeList[this.selectedindex].mobile=this.employeeForm.value.mobile;
    this.employeeList[this.selectedindex].dob=this.employeeForm.value.dob;
    this.employeeList[this.selectedindex].gender=this.employeeForm.value.gender;
    this.employeeList[this.selectedindex].qual=this.employeeForm.value.qual;
    this.toastr.success('Form is valid', 'Details Update sucessfully...!');
    this.clear();
   
  
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
    this.employeeList.splice(index,1);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't to delete this file..!",
      icon: 'warning',
      allowEscapeKey: false,
      allowOutsideClick: false,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      showCancelButton: true,
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
    })
    localStorage.setItem("EMPLOYEE_LIST", JSON.stringify(this.employeeList))
  }

  get f(){
    return this.employeeForm.controls
  }
  
  clear(){
    this.employeeForm.reset();
  }

  



}
