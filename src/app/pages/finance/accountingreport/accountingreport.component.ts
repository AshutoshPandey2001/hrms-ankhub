import { HttpClient } from "@angular/common/http";
import { Component, OnInit, TemplateRef } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { BsModalRef, BsModalService, ModalOptions } from "ngx-bootstrap/modal";

@Component({
  selector: "app-accountingreport",
  templateUrl: "./accountingreport.component.html",
  styleUrls: ["./accountingreport.component.scss"],
})
export class AccountingreportComponent implements OnInit {
  modalRef: BsModalRef;
  config: ModalOptions = {
    backdrop: true, //backgroud color as dark
    keyboard: false, //Close on Esc button
    ignoreBackdropClick: true, //Close on outside click
    animated: true, //Add animation on open close
  };
  empolyeeList = [];
  empolyeeData: FormGroup;
  selectedId = '';
  newIndex = '';
  constructor(
    private modalService: BsModalService,
    public formBulider: FormBuilder,
    private http: HttpClient
  ) {
    this.empolyeeData = formBulider.group({
      employeeID: "",
      employeeName: "",
      employeeStatus: "",
    });
  }

  ngOnInit(): void {
    this.getAllemployee();
  }

  getAllemployee() {
    this.http.get("https://hrms-dev-server.herokuapp.com/api/employee").subscribe(
        (response: any) => {
          this.empolyeeList = response.data;
        },
        (error) => {
          console.log("error", error);
        }
      );
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  submitData() {
    this.http.post("https://hrms-dev-server.herokuapp.com/api/employee",this.empolyeeData.value).subscribe(
        (response: any) => {
          this.getAllemployee();
        },
        (error) => {
          console.log("error", error);
        }
      );
      this.empolyeeData.reset();
    this.modalRef.hide();
  }

  edit(i,_id,template1){
   
    this.selectedId = _id;
    this.newIndex = i;
    this.modalRef = this.modalService.show(template1, this.config);
    this.empolyeeData.patchValue({
      employeeID: this.empolyeeList[i].employeeID,
      employeeName: this.empolyeeList[i].employeeName,
      employeeStatus: this.empolyeeList[i].employeeStatus
    })
    console.log("edit");
   
  }

  updateData(){
    this.http.put("https://hrms-dev-server.herokuapp.com/api/employee/"+this.selectedId,this.empolyeeData.value).subscribe(
      (response: any) => {
        this.getAllemployee();
      },
      (error) => {
        console.log("error", error);
      }
    );
    this.empolyeeData.reset();
  this.modalRef.hide();
  }

  delete(_id){
    this.http.delete("https://hrms-dev-server.herokuapp.com/api/employee/"+_id).subscribe(
      (response: any) => {
        this.getAllemployee();
      },
      (error) => {
        console.log("error", error);
      }
    );
  }

  closeModal() {
    this.modalRef.hide();
  }
}
