import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddprofileComponent } from './addprofile/addprofile.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  //decalarations is empty because profile.module.ts do not have any component file
  //if we create a child component inside profile module
  //then it will be automatically added inside declarations array
  declarations: [
    AddprofileComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  //exporting child component
  exports:[
    AddprofileComponent
  ]
})
export class ProfileModule { }
