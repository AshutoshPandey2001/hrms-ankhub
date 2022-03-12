import { Component, OnInit, TemplateRef } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { ToastrService } from "ngx-toastr";
import { NgxUiLoaderService } from "ngx-ui-loader";
import Swal from "sweetalert2";

@Component({
  selector: "app-utkarsha-demo",
  templateUrl: "./utkarsha-demo.component.html",
  styleUrls: ["./utkarsha-demo.component.scss"],
})
export class UtkarshaDemoComponent implements OnInit {
  modalRef?: BsModalRef;
  empData: FormGroup;
  empList = [];
  submitted = false;
  seasons: string[] = ["Male", "Female", "Other"];
  globalVariable = "";
  spin = false;
  alert = false;

  constructor(
    private modalService: BsModalService,
    public fB: FormBuilder,
    private ngxService: NgxUiLoaderService,
    private toastr: ToastrService
  ) {
    this.empData = this.fB.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      mobileNumber: [
        "",
        [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
      ],
      dob: ["", Validators.required],
      gender: ["", Validators.required],
      qualification: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    let localtoragedata = localStorage.getItem("employee-List");
    this.empList = localtoragedata == null ? [] : JSON.parse(localtoragedata);
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.empData.reset();
  }

  submit() {
    this.submitted = true;

    console.log("controls", this.empData.controls);
    if (this.empData.valid) {
      this.empList.push(this.empData.value);
      localStorage.setItem("employee-List", JSON.stringify(this.empList));
      this.ngxService.start();
      setTimeout(() => {
        this.ngxService.stop();
      }, 2000);
      this.toastr.success('Hello world!', 'Toastr fun!');
      this.empData.reset();
      this.submitted = false;
      this.modalRef.hide();
    } else {
      console.log("plz enter valid input");
    }
  }

  edit(template1: TemplateRef<any>, i) {
    this.modalRef = this.modalService.show(template1);
    this.globalVariable = i;

    this.empData.patchValue({
      name: this.empList[i].name,
      email: this.empList[i].email,
      mobileNumber: this.empList[i].mobileNumber,
      dob: this.empList[i].dob,
      gender: this.empList[i].gender,
      qualification: this.empList[i].qualification,
    });
  }

  get f() {
    return this.empData.controls;
  }

  close() {
    this.modalRef.hide();
    this.empData.reset();
  }

  delete(i, name: string) {
    this.empList.splice(i, 1);
    // if (confirm("Are you sure to delete " + name)) {
    //   localStorage.setItem("employee-List", JSON.stringify(this.empList));
    // }
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
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        localStorage.setItem("employee-List", JSON.stringify(this.empList));
      }
    });
  }

  update() {
    this.modalRef.hide();

    this.empList[this.globalVariable].name = this.empData.value.name;
    this.empList[this.globalVariable].email = this.empData.value.email;
    this.empList[this.globalVariable].mobileNumber =
      this.empData.value.mobileNumber;
    this.empList[this.globalVariable].dob = this.empData.value.dob;
    this.empList[this.globalVariable].gender = this.empData.value.gender;
    this.empList[this.globalVariable].qualification =
      this.empData.value.qualification;
      localStorage.setItem("employee-List", JSON.stringify(this.empList));
      this.toastr.success('Hello world!', 'Toastr fun!');
    this.ngxService.start();
    setTimeout(() => {
      this.ngxService.stop();
    }, 2000);
    this.empData.reset();
  }
}
