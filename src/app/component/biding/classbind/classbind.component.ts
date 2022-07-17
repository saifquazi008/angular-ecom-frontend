import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbind',
  templateUrl: './classbind.component.html',
  styleUrls: ['./classbind.component.css']
})
export class ClassbindComponent implements OnInit {

  // data properties
  
  public  title:string ="Class binding";
  public username:string="Will Smith";
  public age:number;
  public email:string;
  public isMarried:boolean=true;
  public companies:string[]=["Facebook","Google","Microsoft","Amazon"]

  public BG={
    ON:'bg-one',
    TW:'bg-two',
    TH:"bg-three",
  }

  public user={
    id:1001,
    name:"Will Karma",
    email:"will@gmail.com",
    status:true,
  }

  constructor() {
    this.age=22;
    this.email="jhon@gmail.com"
   }

  ngOnInit(): void {
  }

  public onChange(){
    this.user.status = !this.user.status;
  }

}
