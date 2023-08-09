import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  //template:`<p>Welcome to contact page</p>`,
  styleUrls: ['./contact.component.scss','../app.component.scss']
})
export class ContactComponent {

curr = 125;
per=10.50;
today=Date.now();
obj={id:5,name:'Akshay',age:28};
word1="APPLE";
word2="apple";

num:any=0;

EvenOdd(){
  if(this.num%2==0){
    return true;
  }else{
    return false;
  }
}

validate(){
  if(this.num=="" || this.num == 0){
  return true;
  }
  return false;
  }
  
  cities=['Pondicherry','Cuddalore', 'Virudhachalam', 'Chidambaram', 'Gingee', 'Villupuram', 'Tindivanam', 'Chennai'];
  employee=[{FirstName:'Akshay',MiddleName:'Maharudra', LastName:'Paradkar'},{FirstName:'Dhaval',MiddleName:'Narendra', LastName:'Panchal'},{FirstName:'Pratik',MiddleName:'xyz', LastName:'Sawant'}];
}


