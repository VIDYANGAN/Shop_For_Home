import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist.service';
import Swal from 'sweetalert2';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { LoginService } from 'src/app/services/login.service';
import { ShowHideDirective } from '@angular/flex-layout';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishlist:any=[
    
  ]

  // products=[
  //   {
  //     productId: 64,
  //     productName: "Chair",
  //     productDescription: "All types of chairs",
  //     productprice:12.0,
  //     productStock:1,
  //     productImg: "dsds",
  //     productcategory:0
  //   }
  // ]

  userwishlist=[
    {
      wishlistId: 1,
      createTime: "2022-07-25T18:30:00.000+00:00",
      product: [
          {
              productId: 113,
              productName: "Solimo Tulip Leatherette",
              productDescription: "Relaxing 3 seater sofa",
              productprice: 18999.0,
              productStock: 30,
              quantity: 0,
              productImg: "sofa-p5.jpg"
          }
      ]
  }
  ]

  wish_data={}
  

  constructor(private _wishlist:WishlistService , private _product:ProductService, private _login:LoginService) { }

  ngOnInit(): void {

    this.userwishlist=this._login.getWish();
    for(let element of this.userwishlist){
      this.wishlist.push(element.product[0]);
    }
    console.log(this.wishlist);
    
    
    
    
    
  
  
  }


}  



