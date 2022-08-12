import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
import { SalesService } from 'src/app/services/sales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  cart:any=[
    
    
  ]
  
  totalItem=0
  productPrice=0
  discount=20;
  totalprice=0
  usercart=[
    {
        cartId: 1,
        total: 0.0,
        createTime: "2022-07-23T18:30:00.000+00:00",
        updateTime: "2022-07-23T18:30:00.000+00:00",
        product: [
            {
                productId: 106,
                productName: "Bed without Storage",
                productDescription: "Queen Size Bed",
                productprice: 14999.0,
                productStock: 10,
                quantity: 0,
                productImg: "bed-p1.jpg"
            }
        ]
    }
  ] 

  sales_data={}
  time1=""

  constructor(private _login:LoginService , private _sales:SalesService , private router: Router) { }
 

  ngOnInit(): void {
    this.usercart=this._login.getCart();
    // console.log(this.usercart);
    for(let element of this.usercart){
      this.cart.push(element.product[0]);
    }
    console.log(this.cart);

    this.totalItem=this.cart.length;
    for(let element of this.cart){
      this.productPrice+=element.productprice;
    }
    this.totalprice=this.productPrice-(this.productPrice*(this.discount/100));

    this.sales_data={
      create_time:""+this.time1,
      quantity:this.totalItem,
    }

    //storing current time
    this.time1=this.formatDate(new Date);
  }

  deletecart(){
    Swal.fire("Success","Product successfully Removed","success")

  }

  

  //getting current time 
   formatDate = (date:Date) => {
    let d = new Date(date);
    let month = (d.getMonth() + 1).toString();
    let day = d.getDate().toString();
    let year = d.getFullYear();
    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }
    return [year, month, day].join('-');
  }
  
  
  

  checkout(){
    this._sales.addSales(this.sales_data).subscribe(
      (data:any)=>{
        Swal.fire("Success","Order Placed Succeffuly","success")
        setTimeout(() => {
          this.router.navigate(['user/all']);
        }, 500);
      },
      (error)=>{
        Swal.fire("Success",'Order Placed Succeffuly','success')
        setTimeout(() => {
          this.router.navigate(['user/all']);
        }, 500);
      }
    )
    

  }
}
