import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddCustomerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[AddCustomerComponent]
})
export class CustomerModule { }
