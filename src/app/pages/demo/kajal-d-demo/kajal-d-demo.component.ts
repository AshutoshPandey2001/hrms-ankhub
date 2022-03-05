import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kajal-d-demo',
  templateUrl: './kajal-d-demo.component.html',
  styleUrls: ['./kajal-d-demo.component.scss']
})
export class KajalDDemoComponent implements OnInit {
  client ={
    name:'',
    country:'',
    city:''
  }
  // Term:any;
  selectdata:any;
  clientList:any=[];
  index: any;
  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    console.log("this.client",this.client)
    this.clientList.push(this.client);
    // localStorage.setItem("client_List",JSON.stringify(this.clientList));
    this.client={
      name:'',
      country:'',
      city:''
    }
    }
    clear() {
      if(this.client){
      // console.log("this.client", this.client)
      // this.clientList.push(this.client)
      this.client = {
        name:'',
        country:'',
        city:''
      }
      }
    }
    onEdit(index:any){  
      console.log("Click On Edit",index)
      this.selectdata = this.clientList[index]
    }
    onDelete(index: any ) {
      console.log("Click On Delete", this.index)
      if(confirm("Are you sure to delete "))
      this.clientList.splice(index, 1);
       {
       this.clientList(index)
      }
    }
    update(){

    }
  }
  


