import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  modalRef: BsModalRef;
  config: ModalOptions = {
    backdrop: true, //backgroud color as dark
    keyboard: false, //Close on Esc button
    ignoreBackdropClick: true, //Close on outside click
    animated: true, //Add animation on open close
   
  };
  
  courseList:any=[];
  forLoginsuccess=false;
  selectedIndex:any;
  selectedObj="";
  courseForm: FormGroup;
  courseSubmit=false;
  onsearchkey='';

  constructor(private modalService: BsModalService,private formBuilder: FormBuilder,private ngxService: NgxUiLoaderService,private toastr: ToastrService) {
   
    this.courseForm = this.formBuilder.group({
      internname:['',[Validators.required]],
      amount : ['',[Validators.required]],
      duration : ['',[Validators.required]],
      tools : ['',[Validators.required]],
    })
      let data =localStorage.getItem("course_list")
      if(data){
        this.courseList = JSON.parse(data);
      }
   }

  ngOnInit(): void {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  closeModal() {
    this.modalRef.hide();
  }

  submitData() {
    this.courseSubmit = true;
    // console.log("control",this.courseForm.controls);
    // console.log("course_list", this.courseForm.value);
    

    if(this.courseForm.valid){
      this.closeModal();
      this.ngxService.start(); 
      setTimeout(() => {
        this.ngxService.stop(); 
        this.courseForm.value.id=this.randomID();
        this.courseList.push(this.courseForm.value);
        localStorage.setItem("course_list", JSON.stringify(this.courseList));
        this.toastr.success('Hello world!', 'Submitted Successfully');
        // alert("form is valid submitted successfully")
     //   this.showSuccessToaster();
        this.clearData()
        

      }, 2000);
    
    }
    else{
      alert("form is not-valid try again")
    }
    
   
  }
  updateData(){
    this.closeModal();
    this.ngxService.start(); 
    setTimeout(() => {
      
      this.courseList[this.selectedIndex].internname = this.courseForm.value.internname;
      this.courseList[this.selectedIndex].amount = this.courseForm.value.amount;
      this.courseList[this.selectedIndex].duration = this.courseForm.value.duration;
      this.courseList[this.selectedIndex].tools = this.courseForm.value.tools;
      this.clearData() 
      this.ngxService.stop();
      this.forLoginsuccess = false;
      localStorage.setItem("course_list", JSON.stringify(this.courseList))
      console.log("for update data",this.courseList);
      this.toastr.success('Hello world!', 'Updated Successfully !');
    }, 2000);
    
    }
 

  editData(obj:any , template: TemplateRef<any>){

    this.ngxService.start();
    setTimeout(() => {  
      this.ngxService.stop();
      this.modalRef = this.modalService.show(template, this.config);
      this.toastr.info('Your Response', 'Edit');
    }, 2000);
  
    this.selectedIndex= this.courseList.findIndex((x : any )=> x.id === obj.id);
    this.courseForm.patchValue({
      internname: obj.internname ,
      amount : obj.amount ,
      duration : obj.duration,
      tools : obj.tools     
    })
  
        this.forLoginsuccess = true;
  }

   
  deleteData(id:any){
   
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
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
      this.ngxService.start();
      setTimeout(() => {  
 
        setTimeout(() => {  
        Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }, 1000);
   
      this.ngxService.stop();
    

      this.selectedIndex = this.courseList.findIndex((x:any)=>x.id===id);
  
      this.courseList.splice(this.selectedIndex,1)
      localStorage.setItem("course_list", JSON.stringify(this.courseList))
      this.toastr.success('Successfully', 'Deleted');
      }, 2000);
    
    }
  }) 
  
  }
  

  clearData(){
    this.courseForm.reset();
  }

  randomID(){
  return '_' + Math.random().toString(36).substr(2, 9);
}

  get f(){
    return this.courseForm.controls;
  }
  startSpinner(){
    this.ngxService.start(); 
    setTimeout(() => {
      this.ngxService.stop(); 
    }, 2000);
  }
 
   


}
