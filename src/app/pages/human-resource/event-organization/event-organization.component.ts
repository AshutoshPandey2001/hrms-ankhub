import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-event-organization',
  templateUrl: './event-organization.component.html',
  styleUrls: ['./event-organization.component.scss']
})
export class EventOrganizationComponent implements OnInit {

  eventForm:FormGroup
  submitted:any=false;
   editoperation=false;
  selectedobj:any;
  selectedindex:any;
   eventList:any=[];

   modalRef: BsModalRef;
   config: ModalOptions = {
     backdrop: true, //backgroud color as dark
     keyboard: false, //Close on Esc button
     ignoreBackdropClick: true, //Close on outside click
     animated: true, //Add animation on open close
   };

   constructor(private formBuilder:FormBuilder,private modalService: BsModalService,private ngxService: NgxUiLoaderService,private toastr: ToastrService) {
    this.eventForm = this.formBuilder.group ({
 
     event:['' , [Validators.required]],
     date:['',[Validators.required]],
     des:['',[Validators.required]]
    

    })
   let empdata = localStorage.getItem('EMPLOYEE_LIST');
   if(empdata){
     this.eventList = JSON.parse(empdata);
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
  Save(){
    this.submitted=true;
      
     
    if(this.eventForm.valid){
      // this.employeeList.push(this.employeeForm.value)
      console.log("Submit Sucessfully",this.eventForm.value);
      this.ngxService.start(); 
      setTimeout(() => {
        this.ngxService.stop(); 
        this.toastr.success('Form is Valid!', 'Submitted Successfully!');
      let ref = document.getElementById('cancel')
      ref?.click();
    }, 2000);
   }
   else{
    this.toastr.error('Form is not Valid!', 'Try Again!');
   }
    this.eventForm.reset();
    localStorage.setItem("EMPLOYEE_LIST", JSON.stringify(this.eventList))
  }

  Update(){
    this.editoperation=false;
    let ref = document.getElementById('cancel')
    ref?.click();
   
    this.eventList[this.selectedindex].event=this.eventForm.value.event;
    this.eventList[this.selectedindex].date=this.eventForm.value.date;
    this.eventList[this.selectedindex].des=this.eventForm.value.des;
    
    this.clear();
  
    localStorage.setItem("EMPLOYEE_LIST", JSON.stringify(this.eventList))
  }

  edit(index:any,obj:any){
    this.editoperation=true;
    this.selectedindex=index;
    this.selectedobj=obj;
    console.log('this.selectedevent', this.selectedobj)

    this.eventForm.patchValue({
    
     event: obj.event,
     date: obj.date,
     des: obj.des
    
})
  }

  delete(index:any){
    console.log("Delete",index);
    this.eventList.splice(index,1)

    localStorage.setItem("EMPLOYEE_LIST", JSON.stringify(this.eventList))
  }
  get f(){
    return this.eventForm.controls
  }
  
  clear(){
    this.eventForm.reset();
  }
 

}
