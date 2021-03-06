import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  //defined reactive form
  public createProductForm: FormGroup;
  public isSubmited: boolean = false;
  public state:any;

  constructor(private fb: FormBuilder, private productSrv: ProductService, private router: Router) {
    this.createProductForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      seller: ['', [Validators.required]],
      price: ['', [Validators.required]],
      productType: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      stock: ['', [Validators.required]],
      manufacturer: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      batchNo: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
      console.log(history.state.product);
      if(history.state.product!=null) {
        this.createProductForm.patchValue(history.state.product);
      }
  }
  // submit
  public onSubmit(form: any): void {
    if (form.valid) {
      this.isSubmited = true;
      console.log(this.createProductForm.value);
      this.handleProduct(this.createProductForm.value) ;
    } else {
      this.validateForm(form)
      console.log("Form is not Valid.");
    }
  }

  public handleProduct(product: any):void {
    if(product.id !=null && product.id != "") {
      this.updateProduct(product);
    } else{
      this.createProduct(product);
    }
  }
  
  public updateProduct(product: any):void {
       // consume add product api
    this.productSrv.updateProduct(product).subscribe((data: any) => {
      console.log("Product updated successfully.", data);
      this.router.navigateByUrl("/products");
    }, (error: any) => {
      console.log("Product updation failed.", error);
    })
  }
  
  public createProduct(product: any):void {
    // consume add product api
    this.productSrv.addProduct(product).subscribe((data: any) => {
      console.log("Product created successfully.", data);
      this.router.navigateByUrl("/products");
    }, (error: any) => {
      console.log("Product creation failed.", error);
    })
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
    const field = this.createProductForm.get(name);
    return (field?.invalid && field?.touched && field?.errors);
  }
  get form() {
    return this.createProductForm.controls;
  }

  get name() {
    return this.form['name'];
  }
  get seller() {
    return this.form['seller'];
  }
  get price() {
    return this.form['price'];
  }
  get productType() {
    return this.form['productType'];
  }
  get description() {
    return this.form['description'];
  }
  get stock() {
    return this.form['stock'];
  }
  get manufacturer() {
    return this.form['manufacturer'];
  }
  get quantity() {
    return this.form['quantity'];
  }
  get batchNo() {
    return this.form['batchNo'];
  }

}


