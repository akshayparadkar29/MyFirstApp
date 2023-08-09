import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent {
  username:any;
  terms:boolean=false; //for checkbox
  type:string=""; 
  desc:string="";

  addpeople(addcustomerform:NgForm){
    console.log(addcustomerform.valid);
  }

  reset(addcustomerform:NgForm){
    addcustomerform.reset();
  }

  loadData(addcustomerform:NgForm){
    var details = {
      username:'akshay',
      terms: true,
      type: 1,
      desc: 'akshay'
    }

    addcustomerform.setValue(details);
  }
}
