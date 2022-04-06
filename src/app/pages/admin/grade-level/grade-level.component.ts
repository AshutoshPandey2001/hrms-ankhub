import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalRef, BsModalService, ModalOptions } from "ngx-bootstrap/modal";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgxUiLoaderService } from "ngx-ui-loader";
import Swal from "sweetalert2";
import { ToastrService } from "ngx-toastr";

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
  selectedindex: any;
  GradeList: any = [];
  terms = "";

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
    private toastr: ToastrService
  ) {
    this.GradeForm = this.formBuilder.group({
      id: ["", [Validators.required]],
      gradeName: ["", [Validators.required]],
      gradeValue: ["", [Validators.required]],
      tech: ["", [Validators.required]],
    });
    let data = localStorage.getItem("GRADE_LIST");
    if (data) {
      this.GradeList = JSON.parse(data);
    }
  }

  ngOnInit(): void {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  closeModal() {
    this.modalRef.hide();
    this.clear();
    this.submitted=true;
  }
  Save() {
    this.submitted = true;

    if (this.GradeForm.valid) {
      this.GradeList.push(this.GradeForm.value);
      console.log("Submit Sucessfully", this.GradeForm.value);
      {
        this.ngxService.start();
        setTimeout(() => {
          this.ngxService.stop();

          this.toastr.success("Thank you !", "Data Submitted Sucessfully..!");
          let ref = document.getElementById("cancel");
          ref?.click();
        }, 2000);
      }
    } else {
      this.toastr.error("Please try again..!", "Invalid input data !");
    }
    this.clear();
    localStorage.setItem("GRADE_LIST", JSON.stringify(this.GradeList));
  }

  Update() {
    this.editoperation = false;
    {
      this.ngxService.start();
      setTimeout(() => {
        this.ngxService.stop();
        this.toastr.success("Thank you !", " Update Data Sucessfully..!");
        let ref = document.getElementById("cancel");
        ref?.click();
      }, 2000);
      this.GradeList[this.selectedindex].id = this.GradeForm.value.id;
      this.GradeList[this.selectedindex].gradeName =
        this.GradeForm.value.gradeName;
      this.GradeList[this.selectedindex].gradeValue =
        this.GradeForm.value.gradeValue;
      this.GradeList[this.selectedindex].tech = this.GradeForm.value.tech;
      console.log("updated successfully..", this.GradeForm.value);
    }
    localStorage.setItem("GRADE_LIST", JSON.stringify(this.GradeList));
    this.clear();
  }

  edit(index: any, obj: any) {
    this.editoperation = true;
    this.selectedindex = index;
    this.selectedobj = obj;
    console.log("this.selectedobject", this.selectedobj);
    this.GradeForm.patchValue({
      id: obj.id,
      gradeName: obj.gradeName,
      gradeValue: obj.gradeValue,
      tech: obj.tech,
    });
    localStorage.setItem("GRADE_LIST", JSON.stringify(this.GradeList));
  }

  delete(index: any) {
    console.log("Delete", index);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      allowEscapeKey: false,
      allowOutsideClick: false,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancle",
    }).then((result) => {
      if (result.isConfirmed) {
        this.ngxService.start();
        setTimeout(() => {
          setTimeout(() => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            this.toastr.success(" Deleted Sucessfully..!");
          }, 1000);
          this.ngxService.stop();
          this.GradeList.splice(index, 1);
        }, 2000);
      }
    });

    localStorage.setItem("GRADE_LIST", JSON.stringify(this.GradeList));
  }

  get f() {
    return this.GradeForm.controls;
  }

  clear() {
    this.GradeForm.reset();
  }
}
