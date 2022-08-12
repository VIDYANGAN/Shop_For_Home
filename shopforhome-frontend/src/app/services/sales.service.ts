import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http:HttpClient) { }

  //Add sales
    public addSales(sales:any){
      return this.http.post(`${baseUrl}/sales/insertSales`,sales);
    }

  //Load All the sales
  public Sales(){
    return this.http.get(`${baseUrl}/sales/getAllSales`)
  }
}
