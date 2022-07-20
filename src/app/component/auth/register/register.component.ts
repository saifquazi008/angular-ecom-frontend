import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // defined reactive form
  public registerForm: FormGroup;
  public isSubmited: boolean = false;

  constructor(private fb: FormBuilder) {

    // initialize reactive form with form builder
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      state: ['', [Validators.required]],
      zipcode: ['', [Validators.required]],
      agree: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }
  public onSubmit(form: any): void {
    if (form.valid) {
      this.isSubmited = true;
      console.log(this.registerForm.value);
    } else {
      this.validateForm(form)
      console.log("Form is not valid.");
    }
  }
  public validateForm(form: any) {
    Object.keys(form.controls).forEach(field => {
      const control = form.controls[field];
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else {
        this.validateForm(form);
      }
    })
  }

  hasError(name: string) {
    const field = this.registerForm.get(name);
    return (field?.invalid && field?.touched && field?.errors);
  }

  get form() {
    return this.registerForm.controls;
  }

  get firstName() {
    return this.form['firstName'];
  }
  get lastName() {
    return this.form['lastName'];
  }
  get email() {
    return this.form['email'];
  }
  get password() {
    return this.form['password'];
  }
  get state() {
    return this.form['state'];
  }
  get zipcode() {
    return this.form['zipcode'];
  }
  get agree() {
    return this.form['agree'];
  }

}
