import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {}

  //Add user
  // public addUser(user:any){
  public addUser(user:object):Observable<object>{
    return this.http.post<object>(`${baseUrl}/user/insertUser`,user);
  }

  //Load All the user
  public users(){
    return this.http.get(`${baseUrl}/user/getAll`)
  }

  //delete user
  public deleteUser(user : number){
    return this.http.delete(`${baseUrl}/user/delete/${user}`)
  }

  //update user
  public updateUser(user : any){
    return this.http.put(`${baseUrl}/user/update/${user.userId}`,user)
  }
}
