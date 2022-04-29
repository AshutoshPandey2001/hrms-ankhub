import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalRef, BsModalService, ModalOptions } from "ngx-bootstrap/modal";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgxUiLoaderService } from "ngx-ui-loader";
import Swal from "sweetalert2";
import { ToastrService } from "ngx-toastr";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-grade-level",
  templateUrl: "./grade-level.component.html",
  styleUrls: ["./grade-level.component.scss"],
})
export class GradeLevelComponent implements OnInit {
  GradeForm: FormGroup;
  submitted: any = false;
  editoperation = false;
  selectedobj: any;
  newIndex='';
  selectedindex: any;
  terms = "";
  apiDataGrade: any = [];
  baseURL = "https://hrms-dev-server.herokuapp.com/api/";

  modalRef: BsModalRef;
  config: ModalOptions = {
    backdrop: true, //backgroud color as dark
    keyboard: false, //Close on Esc button
    ignoreBackdropClick: true, //Close on outside click
    animated: true, //Add animation on open close
  };

  constructor(
    private formBuilder: FormBuilder,
    private modalService: BsModalService,
    private ngxService: NgxUiLoaderService,
    private toastr: ToastrService,
    private httpClient:HttpClient
  ) {
    this.GradeForm = this.formBuilder.group({
      gradeID: ["", [Validators.required]],
      gradeName: ["", [Validators.required]],
      gradeValue: ["", [Validators.required]],
      gradeTechnology: ["", [Validators.required]],
    });
    
  }

  ngOnInit(): void {
    this.getAllGrades()
  }

  getAllGrades() {
    this.httpClient.get(this.baseURL + 'grade').subscribe(
      (response) => {
        console.log("response", response);
        this.apiDataGrade = response["data"];
      },
      (error) => {
        console.log("error", error);
      },
    )
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  closeModal() {
    this.modalRef.hide();
    this.editoperation=false;
    this.clear();
    this.submitted=true;
  }
  Save() {
    this.submitted = true;

    if (this.GradeForm.valid) {
      this.apiDataGrade.push(this.GradeForm.value)
      console.log("Submit Sucessfully", this.GradeForm.value);
      // this.createEmployee(this.CandidateForm.value)
      this.httpClient.post(this.baseURL + 'grade' , this.GradeForm.value).subscribe(
        (response)=>{
          console.log('response', response);
          this.getAllGrades();
        },
        (error)=>{
          console.log('error', error);     
       },
      )
      {
        this.ngxService.start();
        setTimeout(() => {
          this.ngxService.stop();

          this.toastr.success('Thank you !', 'Submitted Sucessfully..!');
          let ref = document.getElementById('cancel')
          ref?.click();
        }, 2000);
      }
    }
    else {
      this.toastr.error('Please try again !', 'Inavalid input data !');
    }
    console.log("data",this.apiDataGrade.value)
    this.clear();
    this.closeModal();
    localStorage.setItem("Not-received", JSON.stringify(this.apiDataGrade))
  }

  editGrade(i,data,template2:TemplateRef<any>){
    this.selectedindex=data._id;
    console.log('selectedindex', this.selectedindex)
    this.selectedobj=i;
    this.editoperation=true;
    this.modalRef = this.modalService.show(template2, this.config);
    this.GradeForm.patchValue({
      gradeID:this.apiDataGrade[i].gradeID,
      gradeName: this.apiDataGrade[i].gradeName,
      gradeValue: this.apiDataGrade[i].gradeValue,
      gradeTechnology: this.apiDataGrade[i].gradeTechnology
    })
   
  }
  
  Update() {
   
    this.modalRef.hide();
    this.ngxService.start();
    setTimeout(() => { 
   
      this.httpClient.put(this.baseURL + 'grade/'+this.selectedindex,this.GradeForm.value).subscribe(
        (response: any) => {
          this.getAllGrades();
        },
        (error) => {
          console.log("error", error);
        }
      );
                   
      this.clear()
      this.ngxService.stop();
      this.editoperation = false ;
      this.toastr.success('Successfully', ' Updated');
    }, 2000);
    }
  

  deleteGrade(data){
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
    let sendUrl = this.baseURL + 'grade/' + data._id;

    this.httpClient.delete(sendUrl).subscribe(
      (response)=>{
        console.log('response', response)
        this.getAllGrades();
      },
      (error)=>{
        console.log('error', error)
      },
     )

localStorage.setItem("GRADE_LIST" , JSON.stringify(this.apiDataGrade));
    this.ngxService.stop(); 
    Swal.fire(
          
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
    this.toastr.success('Deleted Successfully!', 'Entry!');

  }, 2000); 
      }
    })
  }
  

 

  get f() {
    return this.GradeForm.controls;
  }

  clear() {
    this.GradeForm.reset();
  }

  
}
