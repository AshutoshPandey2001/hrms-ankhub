import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BsDatepickerDirective } from "ngx-bootstrap/datepicker";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";


@Component({
  selector: "app-utkarsha-demo",
  templateUrl: "./utkarsha-demo.component.html",
  styleUrls: ["./utkarsha-demo.component.scss"],
})
export class UtkarshaDemoComponent implements OnInit {
  // @ViewChild(BsDatepickerDirective, { static: false })
  // datepicker?: BsDatepickerDirective;
  modalRef?: BsModalRef;
  empData: FormGroup;
  empList = [];
  submitted = false;
  seasons: string[] = ["Male", "Female", "Other"];
  globalVariable = "";
  spin = false;
  alert = false;

  constructor(private modalService: BsModalService , public fB: FormBuilder) {
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
    let localtoragedata = localStorage.getItem('employee-List');
    this.empList = localtoragedata == null ? [] : JSON.parse(localtoragedata);
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.empData.reset();
  }

  submit() {
    this.submitted = true;
    this.spin = true;
    this.alert=true;

    console.log("controls", this.empData.controls);
    if (this.empData.valid) {
      this.empList.push(this.empData.value);
      this.modalRef.hide();
      this.empData.reset();
      this.submitted = false;
      setTimeout(() => {
        this.spin = false;
      }, 2000);
      setTimeout(() => {
        this.alert = false;
      }, 2000);
      localStorage.setItem('employee-List', JSON.stringify(this.empList));

      
    } else {
      console.log("plz enter valid input");
    }
  };

  edit(template1: TemplateRef<any>, i) {
    this.modalRef = this.modalService.show(template1);
    this.globalVariable = i;
    
    this.empData.patchValue({
      name: this.empList[i].name,
      email: this.empList[i].email,
      mobileNumber: this.empList[i].mobileNumber,
      dob: this.empList[i].dob,
      gender: this.empList[i].gender,
      qualification: this.empList[i].qaulification,
    });
    
  }

  get f() {
    return this.empData.controls;
  }

  close() {
    this.modalRef.hide();
    this.empData.reset();
  }

  delete(i,name: string) {
    this.empList.splice(i, 1);
    if(confirm("Are you sure to delete "+name)) {}
  }

  update() {
    this.spin = true;
    this.alert=true;
    this.modalRef.hide();
   
    this.empList[this.globalVariable].name = this.empData.value.name;
    this.empList[this.globalVariable].email = this.empData.value.email;
    this.empList[this.globalVariable].mobileNumber =
      this.empData.value.mobileNumber;
    this.empList[this.globalVariable].dob = this.empData.value.dob;
    this.empList[this.globalVariable].gender = this.empData.value.gender;
    this.empList[this.globalVariable].qualification =
      this.empData.value.qualification;
      setTimeout(() => {
        this.spin = false;
      }, 2000);
      setTimeout(() => {
        this.alert = false;
      }, 2000);
      localStorage.setItem('employee-List', JSON.stringify(this.empList));
      this.empData.reset();
  }
}
