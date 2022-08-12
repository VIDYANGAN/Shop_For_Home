import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http:HttpClient) { }
    //Load All the categories
    public categories(){
      return this._http.get(`${baseUrl}/category/getAllproductCategory`)
    }
    
    //add new category
    public addCategory(category: object){
      return this._http.post(`${baseUrl}/category/insertproductCategory`,category)
    }

    //delete category
    public deleteCategory(category:number){
      return this._http.delete(`${baseUrl}/category/deleteproductCategory/${category}`)
    }

    //update category
    public updateCategory(category:any){
      return this._http.put(`${baseUrl}/category/updateproductCategory/${category.categoryId}`,category)
    }
}
