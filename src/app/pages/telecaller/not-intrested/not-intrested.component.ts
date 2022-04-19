import { Component, OnInit ,TemplateRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-not-intrested',
  templateUrl: './not-intrested.component.html',
  styleUrls: ['./not-intrested.component.scss']
})
export class NotIntrestedComponent implements OnInit {

  notIntrestedForm:FormGroup;
  notIntrestedcandidatelist:any=[''];
  subBtn=false;
  editbtn=false;
  selectobj:any;
  searchitem='';
  myFiles:string [] = [];
  sMsg:string = '';

  selectedFiles = null;
public imagePath;
  imgURL: any = "";
  
  public message: string;

  
  modalRef: BsModalRef;
  config: ModalOptions = {
    backdrop: true, 
    keyboard: false, 
    ignoreBackdropClick: true, 
    animated: true, 
  };
  apiDataEmployee: any =[];
  baseurl="https://hrms-dev-server.herokuapp.com/api/";

  
  constructor(
    private modalService: BsModalService , 
    private FormBuilder:FormBuilder , 
    private toastr: ToastrService ,
    private ngxService: NgxUiLoaderService,
    private httpClient:HttpClient
    ) { 
    this.notIntrestedForm=this.FormBuilder.group({
      fname:['',[Validators.required]],
      email:['',[Validators.required ,Validators.email]],
      mobile:['',[Validators.required ,Validators.maxLength(10)]],
      Status:['',[Validators.required]]
    })

    let data= localStorage.getItem("notIntrestCandidate_LIST");
    if(data){
      this.notIntrestedcandidatelist=JSON.parse(data);
    }
  }
  

  ngOnInit(): void {
   this.getAllEmployees()
  }
  getAllEmployees(){
 this.httpClient.get(this.baseurl + 'employee').subscribe(
   (response)=>{
     console.log('response', response);
     this.apiDataEmployee = response["data"];
   },
   (error)=>{
     console.log('error', error);     
  },
 )
  }
  openModal(template: TemplateRef<any>) {
    this.subBtn=false;
    this.clear();
    this.modalRef = this.modalService.show(template, this.config);

  }

  closeModal() {
    this.modalRef.hide();
    this.editbtn=false;
    
  }

  // getFileDetails (e) {
  //   //console.log (e.target.files);
  //   for (var i = 0; i < e.target.files.length; i++) { 
  //     this.myFiles.push(e.target.files[i]);
  //   }
  // }

  // delete(i){
  //   this.myFiles.splice(i,1);
  // }
  // preview(files) {
  //   if (files.length === 0)
  //     return;
  
  //   var mimeType = files[0].type;
  //   if (mimeType.match(/image\/*/) == null) {
  //     this.message = "Only images are supported.";
  //     return;
  //   }
  
  //   var reader = new FileReader();
  //   this.imagePath = files;
  //   reader.readAsDataURL(files[0]); 
  //   reader.onload = (_event) => { 
  //     this.imgURL = reader.result; 
  //   }
  // }

  submitData() {
    this.subBtn=true;
    if(this.notIntrestedForm.valid){
    
     this.closeModal();
      this.ngxService.start(); 
      setTimeout(() => {
        this.notIntrestedForm.value.id=this.randomID();      
    this.notIntrestedcandidatelist.push(this.notIntrestedForm.value);
    localStorage.setItem("notIntrestCandidate_LIST" , JSON.stringify(this.notIntrestedcandidatelist));
    this.createEmployee(this.notIntrestedForm.value)
      this.clear();
      this.toastr.success('Submitted Successfully!', 'Details Valid!');

        this.ngxService.stop(); 
      }, 2000);
     
    }else{
      Swal.fire(          
        'Invalid!',
        'Pleasr Enter Correct Details.',
        'warning'
      )
    }
  }
  createEmployee(value){
    console.log('value', value)
    let sendData={
      employeeID: value.id,
      employeeName: value.fname,
      employeeStatus: true
    }
    this.httpClient.post(this.baseurl + 'employee',sendData ).subscribe(
      (response)=>{
        console.log('response', response)
        this.getAllEmployees();

      },
      (error)=>{
        console.log('error', error)

      },
    )

  }
  editemp(data){
    let sendUrl = this.baseurl + 'employee/' + data._id;
    console.log('sendUrl', sendUrl)
    console.log('data', data)
     this.httpClient.put(sendUrl , {employeeID : "#5"}).subscribe(
      (response)=>{
        console.log('response', response)
        this.getAllEmployees();
      },
      (error)=>{
        console.log('error', error)

      },
     )

  }
  delemp(data){
    let sendUrl = this.baseurl + 'employee/' + data._id;
    console.log('data', data)
    this.httpClient.delete(sendUrl).subscribe(
      (response)=>{
        console.log('response', response)
        this.getAllEmployees();
      },
      (error)=>{
        console.log('error', error)
      },
     )
  }


  UpdateData(){
    this.subBtn=true;
    if(this.notIntrestedForm.valid){
    this.editbtn=false;
    this.closeModal();
   this.ngxService.start(); 
   setTimeout(() => {
    this.notIntrestedcandidatelist[this.selectobj].fname=this.notIntrestedForm.value.fname; 
    this.notIntrestedcandidatelist[this.selectobj].email=this.notIntrestedForm.value.email; 
    this.notIntrestedcandidatelist[this.selectobj].mobile=this.notIntrestedForm.value.mobile; 
    this.notIntrestedcandidatelist[this.selectobj].Status=this.notIntrestedForm.value.Status; 

    localStorage.setItem("notIntrestCandidate_LIST" , JSON.stringify(this.notIntrestedcandidatelist));
    this.toastr.success('Updated Successfully!', 'Details Valid!');
    
    this.clear();
     this.ngxService.stop(); 
   }, 2000);
  }else{
    Swal.fire(
          
      'Invalid!',
      'Pleasr Enter Correct Details.',
      'warning'
    )
   
  }
  }


  edit(obj:any , template: TemplateRef<any>){
    this.editbtn=true;   
          this.modalRef = this.modalService.show(template, this.config);      
    this.selectobj=this.notIntrestedcandidatelist.findIndex((x: any) => x.id === obj.id);
      this.notIntrestedForm.patchValue({
        fname:obj.fname,
        email:obj.email,
        mobile:obj.mobile,
        Status:obj.Status
      })
  }


  delqual(id:any){
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
          this.selectobj=this.notIntrestedcandidatelist.findIndex((x: any) => x.id === id);
          this.notIntrestedcandidatelist.splice(this.selectobj,1);
      localStorage.setItem("notIntrestCandidate_LIST" , JSON.stringify(this.notIntrestedcandidatelist));
      Swal.fire(
          
        'Deleted!',
        'Your file has been deleted.',
        'success'
        
      )
      this.toastr.success('Successfully!', 'Entry Deleted !');

          this.ngxService.stop(); 
        }, 2000);
       
        
      }
    })
    

  }
 randomID() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

  get f(){
    return this.notIntrestedForm.controls;
  }

  clear(){
    this.notIntrestedForm.reset();
  }
}

