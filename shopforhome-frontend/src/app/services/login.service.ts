import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs';
import { CartComponent } from '../pages/user-dashboard/cart/cart.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userId:number = 0
  userRole:string=''
  userCart:any=[]
  userWish:any=[]
  constructor(private http: HttpClient) { }

  //generate token
  public setUserId(userId:number){
    this.userId=userId;
    // localStorage.setItem('userId',JSON.stringify(userId));
  }
  //isLogin : user is logged in or not
  public isLoggedIn(){
      //incomplete
    
    if(this.userId == undefined || this.userId == null || this.userId==0){
      return false;
    }else{
      return true;
    }
  }

  //Logout : remove userId from local storage
  public logout(){
    this.userId=0;
    this.userRole='';
    localStorage.removeItem('user');
    // return true;
  }

  //get User from local storage for admin purpose
  public getUserId(){
    return localStorage.getItem("userId")
  }

  //set userDetails
  public setUser(user : object){
    localStorage.setItem('user',JSON.stringify(user));
  }

  //getUser
  public getUser(){
    let userStr=localStorage.getItem("user");
    if(userStr!=null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  //set UserRole
  public setUserRole(userRole : string){
    this.userRole =userRole;
    // localStorage.setItem("userRole",JSON.stringify(userRole))
  }

  //get UserRole
  public  getUserRole(){
    return this.userRole;
  }

  public setCart(cart : []){
      this.userCart=cart;
  }

  public getCart(){
    return this.userCart;
  }

  public setWish(wish : []){
    this.userWish=wish;
}

  public getWish(){
    return this.userWish;
  } 
  
}


