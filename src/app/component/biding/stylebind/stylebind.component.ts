import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebind',
  templateUrl: './stylebind.component.html',
  styleUrls: ['./stylebind.component.css']
})
export class StylebindComponent implements OnInit {

  //data properties
  public title: string = "style binding.";
  public username: string = "Will Karma";
  public age: number;
  public email: string;
  public isMarried: boolean = true;
  public companies: string[] = ["Facebook", "Amazon", "Netflix", "Google"];

  public colors = {
    R: 'red',
    G: 'green',
    B: 'blue',
  }
  public sizes = {
    TWO: '2',
    TEN: '10',
    TWENTY: '20',
    THIRTY: '30',
  }
  public user = {
    id: 1001,
    name: "Shahid khan",
    email: "shahid@gmail.com",
    status: true
  }
  constructor() {
    this.age = 20;
    this.email = "jhon@gmail.com";
  }

  ngOnInit(): void {
  }

  public changeStyle() {
    this.isMarried = !this.isMarried;
  }
}
