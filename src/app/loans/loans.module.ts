import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanstructureComponent } from './loanstructure/loanstructure.component';
import { AddloanComponent } from './loanstructure/addloan/addloan.component';
import { EditloanComponent } from './loanstructure/editloan/editloan.component';
import { DeleteloanComponent } from './loanstructure/deleteloan/deleteloan.component';
import { ViewloanComponent } from './loanstructure/viewloan/viewloan.component';



@NgModule({
  declarations: [
    AddloanComponent,
    DeleteloanComponent,
    EditloanComponent,
    ViewloanComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoansModule { }
