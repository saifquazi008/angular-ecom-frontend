import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: any;

  constructor(public productService: ProductService) {

  }

  ngOnInit(): void {

    this.getAllProduct();
  }

  getAllProduct() {
    this.productService.getProduct()
      .subscribe((data: any) => {
        this.products = data;
        console.log(data);

      }, (error: any) => {
        console.log(error);
      });
  }
}
