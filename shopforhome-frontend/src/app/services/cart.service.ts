import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _http:HttpClient) { }

  //add new cart
  public addCart(cart: object){
    return this._http.post(`${baseUrl}/cart/insertCart`,cart)
  }
}
