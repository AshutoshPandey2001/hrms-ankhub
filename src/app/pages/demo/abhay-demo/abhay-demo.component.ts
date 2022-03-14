import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-abhay-demo',
  templateUrl: './abhay-demo.component.html',
  styleUrls: ['./abhay-demo.component.scss']
})
export class AbhayDemoComponent implements OnInit {

  // searchedbox = '';
  // carForm: FormGroup;
  // submitted = false;
  // carsList: any = [];

  // issubmitoperation = false;
  // selectedIndex: any;
  // selectedObject: any;
  searchingbox = '';
  modForm: FormGroup;
  submittedl = false;
  modlList: any = [];

  istableoperation = false;
  selectedIndexd: any;
  selectedObjectd: any;
  loading = false;


  constructor(private formBuilder: FormBuilder) {

    // this.carForm = this.formBuilder.group({
    //   carmodels: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(9)]],
    //   carcolor: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(13)]]
    // })

    // let data = localStorage.getItem('CARSLIST')
    // if (data) {
    //   this.carsList = JSON.parse(data);
    // }

    this.modForm = this.formBuilder.group({
      fullname: ['', [Validators.required]],
      email: ['', [Validators.email]],
      mobileno: ['', [Validators.minLength(10), Validators.maxLength(10)]],
      dateob: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      qualifi: ['']
    })

    let datatab = localStorage.getItem('MODLIST')
    if (datatab) {
      this.modlList = JSON.parse(datatab);
    }

  }

  ngOnInit(): void {
  }


  // abrSubmit() {
  //   this.submitted = true;
  //   //console.log("Control works",this.carForm.controls);
  //   //console.log("Submit works",this.carForm.value);

  //   console.log("Controls are valid", this.carsList);
  //   if (this.carForm.valid) {
  //     this.carForm.value.id = this.uniqueid();
  //     this.carsList.push(this.carForm.value)
  //     alert("Form is Valid...Submit Successfully!")
  //     this.caclear()
  //   }
  //   else {
  //     alert("Form is invalid....Please try again!")
  //   }
  //   localStorage.setItem("CARSLIST", JSON.stringify(this.carsList));

  // }

  // carUpdate() {
  //   this.carsList[this.selectedIndex].carmodels = this.carForm.value.carmodels;
  //   this.carsList[this.selectedIndex].carcolor = this.carForm.value.carcolor;

  //   this.issubmitoperation = false;
  //   alert("Updated Successfully");
  //   this.caclear()
  // }

  // carEdit(obj: any) {
  //   this.selectedIndex = this.carsList.findIndex((xt:any)=>xt.id === obj.id);
  //   console.log('this.selectedIndex', this.selectedIndex)
  //   this.selectedObject = obj;

  //   this.issubmitoperation = true;
  //   this.carForm.patchValue({
  //     carmodels: obj.carmodels,
  //     carcolor: obj.carcolor
  //   })
  // }

  // carDelete(id:any) {
  //   this.selectedIndex = this.carsList.findIndex((xt:any)=>xt.id === id);

  //   this.carsList.splice(this.selectedIndex, 1);
  //   localStorage.setItem("CARSLIST", JSON.stringify(this.carsList));
  // }

  // get f() {
  //   return this.carForm.controls;
  // }

  // caclear() {
  //   this.carForm.reset();
  // }

  // uniqueid() {
  //   return '_' + Math.random().toString(36).substr(2, 9);
  // };


  tabSubmit(from, align) {
    this.submittedl = true
    console.log('control works', this.modForm.controls);

    console.log('value', this.modForm.value);
    console.log("Controls are valid", this.modlList);
    if (this.modForm.valid) {
     
      
      this.loading = true;
      setTimeout(() => {
        
        this.loading = false;
        const type = ['', 'success'];

        const color = Math.floor((Math.random() * 1) + 1);

        $.notify({
          icon: "notifications",
          message: "Your form is submitted Successfully!"

        },
          {
            type: type[color],
            timer: 4000,
            placement: {
              from: from,
              align: align
            },
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
              '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
              '<i class="material-icons" data-notify="icon">notifications</i> ' +
              '<span data-notify="title">{1}</span> ' +
              '<span data-notify="message">{2}</span>' +
              '<div class="progress" data-notify="progressbar">' +
              '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
              '</div>' +
              '<a href="{3}" target="{4}" data-notify="url"></a>' +
              '</div>'
          });
         
      }, 5000);
      
      this.modForm.value.id = this.tableid();
        this.modlList.push(this.modForm.value);
      this.tabclear()
    }
    else {
      alert("Form is invalid....Please try again!")
    }

    localStorage.setItem("MODLIST", JSON.stringify(this.modlList));

  }

  tabUpdate(from, align) {
    
    
    //this.istableoperation = false;
    this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.istableoperation = false;
        this.modlList[this.selectedIndexd].fullname = this.modForm.value.fullname;
        this.modlList[this.selectedIndexd].email = this.modForm.value.email;
        this.modlList[this.selectedIndexd].mobileno = this.modForm.value.mobileno;
        this.modlList[this.selectedIndexd].dateob = this.modForm.value.dateob;
        this.modlList[this.selectedIndexd].gender = this.modForm.value.gender;
        this.modlList[this.selectedIndexd].qualifi = this.modForm.value.qualifi;
        this.tabclear();
        localStorage.setItem("MODLIST", JSON.stringify(this.modlList));
    const type = ['', 'warning'];

    const color = Math.floor((Math.random() * 1) + 1);

    $.notify({
      icon: "notifications",
      message: "Your Info Updated Successfully!"

    },
      {
        type: type[color],
        timer: 3000,
        placement: {
          from: from,
          align: align
        },
        template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
      });
    }, 3000);
    
  }

  tabEdit(obj: any, from, align) {
    this.loading = true;
      setTimeout(() => {
        this.loading = false;
    const type = ['', 'info'];

    const color = Math.floor((Math.random() * 1) + 1);

    $.notify({
      icon: "notifications",
      message: "you clicked on edit button!"

    },
      {
        type: type[color],
        timer: 3000,
        placement: {
          from: from,
          align: align
        },
        template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
      });
    }, 3000);
    this.selectedIndexd = this.modlList.findIndex((xb: any) => xb.id === obj.id);
    console.log('this.selectedIndexd', this.selectedIndexd)
    //   this.selectedObject = obj;

    this.istableoperation = true;
    this.modForm.patchValue({
      fullname: obj.fullname,
      email: obj.email,
      mobileno: obj.mobileno,
      dateob: obj.dateob,
      gender: obj.gender,
      qualifi: obj.qualifi
    })
    
  }

  tabDelete(id: any, from, align) {
    this.selectedIndexd = this.modlList.findIndex((xb: any) => xb.id === id);
    // let box = prompt("Do you want to delete");
    if (confirm('Do you want to delete?') == true) {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      const type = ['', 'danger'];

      const color = Math.floor((Math.random() * 1) + 1);

      $.notify({
        icon: "notifications",
        message: "Your Info Deleted Successfully!"

      },
        {
          type: type[color],
          timer: 3000,
          placement: {
            from: from,
            align: align
          },
          template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
            '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
            '<i class="material-icons" data-notify="icon">notifications</i> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
            '</div>'
        });
        this.modlList.splice(this.selectedIndexd, 1);
        localStorage.setItem("MODLIST", JSON.stringify(this.modlList));
      }, 2000);
      
    } else {
      const type = ['', 'warning'];

      const color = Math.floor((Math.random() * 1) + 1);

      $.notify({
        icon: "notifications",
        message: "Your Editting cancel!"

      },
        {
          type: type[color],
          timer: 3000,
          placement: {
            from: from,
            align: align
          },
          template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
            '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
            '<i class="material-icons" data-notify="icon">notifications</i> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
            '</div>'
        });
    }

    
  }

  tabclear() {
    this.modForm.reset();
  }

  get m() {
    return this.modForm.controls;
  }

  tableid() {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

}
