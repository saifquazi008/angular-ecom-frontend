import { Component, OnInit } from '@angular/core';
import { login } from 'src/app/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public login:login;
public isSubmitted:boolean=false;
  constructor() { 
    this.login={email:'',password:'',rememberme:false};
  }

  ngOnInit(): void {
  }
public onSubmit(form:any):void{
  //console.log(form);
  if(form.valid){
    console.log(this.login);
    this.isSubmitted=true; 
  } else {
    this.validateForm(form);
    console.log("form is not valid .");
    
  }
  
}
public validateForm(form:any){
  Object.keys(form.controls).forEach(field=>{
    const control =form.controls[field];
       control.markAsTouched({onlySelf:true});
  })
}
hasError(field:any){
  return(field.invalid && field.touched && field.errors);
}
}
