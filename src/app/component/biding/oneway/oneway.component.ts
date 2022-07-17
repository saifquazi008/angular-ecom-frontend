import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway',
  templateUrl: './oneway.component.html',
  styleUrls: ['./oneway.component.css']
})
export class OnewayComponent implements OnInit {

  //data properties
  public title:string ="interpolation base data binding .";
  public username:string ="Saif Quazi";
  public age:number;
  public email:string;
  public isMarried:boolean= false;
  public companies:string[]=["facebook","Amazon","Netflix","Google"];

  public user={
    id:101,
    name:"Shahid",
    email:"Shahid@gmail.com",
    status:false
  }

  constructor() {
    this.age=21;
    this.email="Shahid@gmail.com";
   }

  ngOnInit(): void {
  }

}
