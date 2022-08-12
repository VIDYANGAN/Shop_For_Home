import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-load-product',
  templateUrl: './load-product.component.html',
  styleUrls: ['./load-product.component.css']
})
export class LoadProductComponent implements OnInit {

  products:any;
  

  constructor(private _product:ProductService ,  public loginF : LoginService , private _cart: CartService ) { }

  cart={
  }

  ngOnInit(): void {
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

        this.cart={
          createTime:''+this.time1,
          updateTime:''+this.time1,
          total:'0',
          user:this.loginF.getUserId
        }
        
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

    //storing current time
    time1=this.formatDate(new Date);


    //for wishlist 
    checklogInW(){
      if(this.loginF.isLoggedIn()==true){
        Swal.fire("Success","Product added to wishlist","success")

      }else{
        Swal.fire("Not Logged In","Login First",'error');
      }

    }

    //for cart
  checklogInC(){
    if(this.loginF.isLoggedIn()==true){
       
      this._cart.addCart(this.cart).subscribe(
        (data:any)=>{
          Swal.fire("Success","Product added to cart","success")
        },
        (error)=>{
          Swal.fire("Success","Product added to cart","success")
          
        }
      )
      console.log(this.cart);
      
      
          
    }
    else{
      Swal.fire("Not Logged In","Login First",'error');
    }
  }
}
