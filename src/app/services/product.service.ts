import { Injectable } from "@angular/core";

import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    private APIURL: string = 'http://localhost:9010/api/ecom-service/products';

    constructor(private httpClient: HttpClient) { }

    // get all products 
    public getProduct(): any {
        // return observable
        return this.httpClient.get(this.APIURL);
    }
    
    // get one product
    public getOne(id: number): any {
        //return observable
        return this.httpClient.get(`${this.APIURL}/${id}`);
    }

    //get one product
    public getOneByTitle(title: string): any {
        //return observable
        return this.httpClient.get(`${this.APIURL}?title=${title}`);
    }

    //add one product 
    public addProduct(product: any): any {
        //return observable
        return this.httpClient.post(`${this.APIURL}`, product);
    }

    //update one product
    public updateProduct(product: any): any {
        //return observable
        return this.httpClient.put(`${this.APIURL}/${product.id}`, product);
    }
    //delete one product
    public deleteProduct(id: number): any {
        //return observable
        return this.httpClient.delete(`${this.APIURL}/${id}`);
    }
}