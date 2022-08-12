import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css']
})
export class UserCRUDComponent implements OnInit {

  users=[
    {
      userId: 64,
      userName: "Ritik",
      password: "ritik@123",
      email:"ritik@123gmail.com",
      address:"",
      cart:[],
      wishlist:[],
      userRole:""
    }
  ]

  constructor(private _user:UserService) { }

  ngOnInit(): void {

    this._user.users().subscribe((data:any)=>{
      //category
      this.users=data;
      console.log(this.users);
      
    },
    (error)=>{
      //
      console.log(error);
      Swal.fire("Error","error in loading data",'error');
    })

  }

}
