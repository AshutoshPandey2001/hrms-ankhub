import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef, ModalOptions } from "ngx-bootstrap/modal";

@Component({
  selector: "app-shubham-demo",
  templateUrl: "./shubham-demo.component.html",
  styleUrls: ["./shubham-demo.component.scss"],
})
export class ShubhamDemoComponent implements OnInit {
  modalRef: BsModalRef;
  config: ModalOptions = {
    backdrop: true, //backgroud color as dark
    keyboard: false, //Close on Esc button
    ignoreBackdropClick: true, //Close on outside click
    animated: true, //Add animation on open close
  };

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  openDialog() {
    console.log("openDialog");
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  closeModal() {
    this.modalRef.hide();
  }

  submitData() {
    console.log('You Clicked on Submit button')
  }
}
