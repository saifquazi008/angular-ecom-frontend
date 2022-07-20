import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: any;

  constructor(public productService: ProductService, private router:Router) {

  }

  ngOnInit(): void {

    this.getAllProduct();
  }

  public getAllProduct():void {
    this.productService.getProduct()
      .subscribe((data: any) => {
        this.products = data;
        console.log(data);

      }, (error: any) => {
        console.log(error);
      });
  }

  public onEdit(pdata:any):void {
    // console.log(product);
    this.router.navigateByUrl("/products/create", {state: { product : pdata }})
  }
  public onDelete(productId:number):void {
    this.productService.deleteProduct(productId).subscribe((data:any) =>{
      console.log("Product is deleted successfully!",data);
      this.getAllProduct();
    },(error: any) => {
      console.log(error);
      this.getAllProduct();
    })
    
  }
}
