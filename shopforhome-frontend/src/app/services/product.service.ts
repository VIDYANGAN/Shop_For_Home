import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http:HttpClient) { }

  //Load All the product
  public products(){
    return this._http.get(`${baseUrl}/product/getAllProduct`)
  }

  //add new product
  public addProduct(product: object){
    return this._http.post(`${baseUrl}/product/insertProduct`,product)
  }

  //delete product
  public deleteProduct(product:number){
    return this._http.delete(`${baseUrl}/product/deleteProduct/${product}`)
  }

  //update product
  public updateProduct(product:any){
    return this._http.put(`${baseUrl}/product/updateProduct/${product.productId}`,product)
  }
}
