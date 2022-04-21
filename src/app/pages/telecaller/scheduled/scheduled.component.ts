import { Component, OnInit,TemplateRef} from '@angular/core';
import { EmployeeService } from 'app/services/employee.service';
import { BsModalRef, BsModalService, ModalOptions } from "ngx-bootstrap/modal";



@Component({
  selector: 'app-scheduled',
  templateUrl: './scheduled.component.html',
  styleUrls: ['./scheduled.component.scss'],
  providers: [BsModalService,EmployeeService],

})
export class ScheduledComponent implements OnInit {

  Employees=[];

  modalRef: BsModalRef;
  config: ModalOptions = {
    backdrop: true, //backgroud color as dark
    keyboard: false, //Close on Esc button
    ignoreBackdropClick: true, //Close on outside click
    animated: true, //Add animation on open close
  };
 
  constructor(private _employeeService : EmployeeService, private modalService: BsModalService ) { }

  ngOnInit(): void {
    this._employeeService.getEmployee()
   .subscribe(data => this.Employees=data);
  }
  

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }
  
    closeModal() {
      this.modalRef.hide();
    }

}

