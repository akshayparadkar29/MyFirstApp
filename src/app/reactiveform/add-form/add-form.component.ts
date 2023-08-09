import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit{
  addloanform:FormGroup = new FormGroup({});

  constructor(private fb:FormBuilder){ //for dynamic form building
  }

  ngOnInit(){
    this.addloanform = this.fb.group({
      'loanname': new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
      'loandesc': new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(10)])
    })

    const dummydata = {
      'loanname': '',
      'loandesc': 'abc'
    }
    //pathcValue to update specific form fields
    this.addloanform.patchValue(dummydata);
    //for recording live changes in the form inputs


    
    this.addloanform.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }

  submit(){
    console.log(this.addloanform.value);
    //to get a specific frm input value
    console.log(this.addloanform.get('loandesc')?.value);
    //console.log(this.addloanform.valueChanges);
  }

  formStates(){
    console.log("VALID:",this.addloanform.valid);
    console.log("INVALID",this.addloanform.invalid);
    console.log("PRISTINE",this.addloanform.pristine);
    console.log("DIRTY",this.addloanform.dirty);
    console.log("UNTOUCHED",this.addloanform.untouched);
    console.log("TOUCHED",this.addloanform.touched);
  }
  style1:any="c1";
  style2:any="c2";
}
