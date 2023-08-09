import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    console.log("ngOnInit()");
  }

  //declare application logic here
  title = 'MyFirstApp';

name = "Akshay";
category = "accessories";
couponCode ="101";
role = "admin";
color= "red";
dynamicColor= "blue";
styleProp = 'c1 c2 c3';

num1 = 5;
num2 = 5;

//age variable with stricter type declaration
age:number = 20;
//initial variable with stricter type
//initial:string = "Lakshmi";
//Array
marks = [1,2,3,4,5];
//Array of Objects. {} is used to define an object
//employees array is holding three objects
employees = [{'Name':'Akshay','Gender':'Male'},{'Name':'Snehal','Gender':'Female'},{'Name':'Dhaval','Gender':'Male'}];
//Single Object Array
student = {name:"Dev", age:21, gender: "Male"};
isStudent = true;
imgurl = "C:/Users/aksha/Downloads/audi.jpg";
imgAddr = "https://yt3.googleusercontent.com/ytc/AOPolaSYIvTrgKFP_GYCt9wGKhBdX32Z41xmVDrrntzCYQ=s900-c-k-c0x00ffffff-no-rj";
fname="";

//Array of Objects. {} is used to define an object
students = [{
'fname':'A','lname':'ZZ','id':1
},{
'fname':'B','lname':'Ze','id':2
},{
'fname':'C','lname':'Zw','id':3
},{
'fname':'D','lname':'Zt','id':4
}];

//in AngularJS function is defined directly. No need of function keyword
display(){
console.log("Hello");
}

cities=['Pondicherry','Cuddalore', 'Virudhachalam', 'Chidambaram', 'Gingee', 'Villupuram', 'Tindivanam', 'Chennai'];
employee=[{FirstName:'Akshay',MiddleName:'Maharudra', LastName:'Paradkar'},{FirstName:'Dhaval',MiddleName:'Narendra', LastName:'Panchal'},{FirstName:'Pratik',MiddleName:'xyz', LastName:'Sawant'}];
}
