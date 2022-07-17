import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
public user: User;
public isLoggedIn;
  constructor(public dataService:DataService) {
    this.user=dataService.user;
    this.isLoggedIn=dataService.isLoggedIn();
   }

  ngOnInit(): void {
  }

}
