import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  [x: string]: any;

  constructor(private _http:HttpClient) { }

  //load wishlist
  public getwishlist(){
    return this._http.get(`${baseUrl}/Wishlist/getAllWishlist`);
  }

  //Add wishlist
  public addwishlist(){
  
  }

  //delete wishlist 
  public deletewishlist(){

  }
}
