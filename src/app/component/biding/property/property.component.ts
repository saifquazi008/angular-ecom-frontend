import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  //data properties
  public title:string ="property base data binding .";
  public username:string ="Saif Quazi";
  public age:number;
  public email:string;
  public isMarried:boolean= false;
  public companies:string[]=["facebook","Amazon","Netflix","Google"];

  public user={
    id:101,
    name:"Haris",
    email:"Haris@gmail.com",
    status:true
  }

  constructor() {
    this.age=21;
    this.email="saif@gmail.com";
   }

  ngOnInit(): void {
  }

}
