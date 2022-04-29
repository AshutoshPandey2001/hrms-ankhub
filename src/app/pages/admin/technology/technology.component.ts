import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from "ngx-bootstrap/modal";
import { NgxUiLoaderService } from 'ngx-ui-loader';
import Swal from 'sweetalert2'
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { data } from 'jquery';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
  modalRef: BsModalRef;
  config: ModalOptions = {
    backdrop: true, //backgroud color as dark
    keyboard: false, //Close on Esc button
    ignoreBackdropClick: true, //Close on outside click
    animated: true, //Add animation on open close
  };


  isUpdate = false;
  technoList : any = [];
 

  technoForm : FormGroup;
  dataSub = false;
 
  technoId = '';

  Index = '';
  

  baseUrl = "https://hrms-dev-server.herokuapp.com/api/";

  
  constructor(private formbuilder:FormBuilder,
    private modalService: BsModalService,
    private ngxService: NgxUiLoaderService, 
    private toastr: ToastrService,
    private httpClient: HttpClient
    ) {
    
    this.technoForm = formbuilder.group({
   
      technologyID:['',[Validators .required]],
      technologyName:['',[Validators .required]],

    })

  

    }
   

  ngOnInit(): void {
  this.getAlltechnology();
  }   


getAlltechnology() {
  this.httpClient.get(this.baseUrl + 'technology').subscribe(
      (response: any) => {
        this.technoList = response.data;
      },
      (error) => {
        console.log("error", error);
      }
    );
}
openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template, this.config);
}

closeModal() {
  this.modalRef.hide();
  this.isUpdate = false;
 
}

submitData() {
  
    this.dataSub = true;
   
  if (this.technoForm.valid){
    
   
    this.ngxService.start();

    setTimeout(() => {  
      this.ngxService.stop();
      this.technoForm.value.id = this.randomID();
      this.technoList.push(this.technoForm.value)
    

      this.createTechnology(this.technoForm.value)
      
      
      this.toastr.success('Sucessfully', 'Submitted');
    }, 2000);
  
}
else {
 
  
  this.toastr.error('Pleasr Enter Correct Details!!!', 'Invalid input');
 }
 this.modalRef.hide();
}

createTechnology(value){
    console.log('value',value);
    let sendData ={
      technologyID: value.technologyID,
      technologyName: value.technologyName 
     
    }
    console.log(value);
    
    this.httpClient.post(this.baseUrl + 'technology',sendData).subscribe(
      (response)=>{
        console.log("response",response);
        
      },
      (error)=>{
        console.log('error',error);  
      }
    )
      }

edit(i,_id,template){
  this.isUpdate = true;
  this.technoId = _id;
  this.Index = i;
  this.modalRef = this.modalService.show(template, this.config);
  this.technoForm.patchValue({
    
    technologyID: this.technoList[i].technologyID,
    technologyName: this.technoList[i].technologyName,
   
  })
  console.log("edit");
 
}

updateData(i){
 


this.modalRef.hide();
    this.ngxService.start();
    setTimeout(() => { 
   
      this.httpClient.put(this.baseUrl + 'technology/'+this.technoId,this.technoForm.value).subscribe(
        (response: any) => {
          this.getAlltechnology();
        },
        (error) => {
          console.log("error", error);
        }
      );
                   
      this.technoClear()
      this.ngxService.stop();
      this.isUpdate = false ;
      this.toastr.success('Successfully', ' Updated');
    }, 2000);
}





delete(_id){
      
        let sendUrl = this.baseUrl + "employee/" + this.technoId;
  
      
  
        
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
   
        this.httpClient.delete(this.baseUrl + 'technology/'+_id).subscribe(
              (response: any) => {
                this.getAlltechnology();
              },
              (error) => {
                console.log("error", error);
              }
            );
                this.toastr.success('Successfully', 'Deleted');
              }, 2000);
            
            }
          }) 
      }
technoClear(){
this.technoForm.reset();
}


randomID()
{
return '_' + Math.random().toString(36).substr(2, 9);
}


get t(){
  return this.technoForm.controls
}




}
