import { Injectable } from '@angular/core';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public user:User ={
    id:101,
    name:'Jhon Smith',
    email:'jhon@gmail.com',
    status:true,
    address:'JK Street'
  }
  public userList:User[]=[
    {
      id:1001,
      name:'jhon Smith',
      email:'jhon@gmail.com',
      status:true,
      address:'JK Street'
    }, {
      id:1002,
      name:'Mike Smith',
      email:'Mike@gmail.com',
      status:true,
      address:'MK Street'
    }
  ];
  public isLogged:boolean=false;
  public token:String='qwfvmefoewoewror32roszcsdommdpsfcz';

  constructor() { }

  public getUser():User {
return this.user;
  }
  public get UserId():number {
    return  this.user.id;
  }
  public isLoggedIn():boolean {
    return this.isLogged;
  }
  public get UserList(): User[] {
    return this.userList;
  }
}
