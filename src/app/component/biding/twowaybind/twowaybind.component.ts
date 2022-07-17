import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybind',
  templateUrl: './twowaybind.component.html',
  styleUrls: ['./twowaybind.component.css']
})
export class TwowaybindComponent implements OnInit {

  public message:string = "Today";
  public text:string="";

  constructor() { }

  ngOnInit(): void {
  }
  onInput($event:any) {
    this.message = $event.target.value;
  }
}
