import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-sdk-crud',
  templateUrl: './sdk-crud.component.html',
  styleUrls: ['./sdk-crud.component.scss']
})
export class SdkCrudComponent implements OnInit {
  modalRef: BsModalRef;
  config: ModalOptions = {
    backdrop: true, //backgroud color as dark
    keyboard: false, //Close on Esc button
    ignoreBackdropClick: true, //Close on outside click
    animated: true, //Add animation on open close
  };
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  closeModal() {
    this.modalRef.hide();
  }

  submitData() {
    console.log("You Clicked on Submit button");
  }

}
