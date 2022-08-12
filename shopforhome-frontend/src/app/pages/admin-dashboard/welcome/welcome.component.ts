import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

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

  categories=[
    {
      categoryId: 64,
      categoryName: "Chair",
      categoryDesc: "All types of chairs",
      product: []
    }
  ]

  products=[
    {
      productId: 0,
      productName: "",
      productDescription: "",
      productprice:0,
      productStock:0,
      productImg: "",
      productcategory:0
    }
  ]

  sales=[
    {
      salesId:10,
      createTime:"2022-12-22",
      quantity:2,
      product:[]
    },
  ]

  total:number=0
  constructor(private _user:UserService , private _category:CategoryService,private _product:ProductService,private _sales:SalesService) { }
    
  ngOnInit(): void {

    //getting user
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

    //getting category
    this._category.categories().subscribe((data:any)=>{
      //category
      this.categories=data;
      console.log(this.categories);
    },
    (error)=>{
      //
      console.log(error);
      Swal.fire("Error","error in loading data",'error');
    })

    //getting products
    this._product.products().subscribe((data:any)=>{
      //category
      this.products=data;
      console.log(this.products);
      
    },
    (error)=>{
      //
      console.log(error);
      Swal.fire("Error","error in loading data",'error');
    })

    // getting sales
    this._sales.Sales().subscribe((data:any)=>{
      // sales
      this.sales=data.sales;
      console.log(data);
      
      // calculating total product sold
      for(let i=0;i<100;i++){
        this.total+=data[i].quantity;
      }
    },
    (error)=>{
      //
      console.log(error);
      Swal.fire("Error","error in loading data",'error');
    })

    
  
  }
  

}
