import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})

  
export class AddproductComponent implements OnInit {

  product={
    productName:'',
    productDescription:'',
    productprice: 0.0,
    productStock: 0,
    productImg:'',
  }

  constructor(private _product:ProductService , private _snack:MatSnackBar , private router: Router) { }

  ngOnInit(): void {
  }

  // Add product method
  addProductFormSubmit(){

    if(this.product.productName.trim()=='' || this.product.productName==null){
      this._snack.open("Product Name Required !!",'',{
        duration:2000
      });
      return;
    } 
    else if(this.product.productDescription.trim()=='' || this.product.productDescription==null){
      this._snack.open("Product Description Required !!",'',{
        duration:2000
      });
      return;
    } else if(this.product.productprice ==0 || this.product.productprice==null){
      this._snack.open("Product Price Required !!",'',{
        duration:2000
      });
      return;
    } else if(this.product.productStock==0|| this.product.productStock==null){
      this._snack.open("Product Stock Required !!",'',{
        duration:2000
      });
      return;
    } else if(this.product.productImg==''|| this.product.productImg==null){
      this._snack.open("Product Img Required !!",'',{
        duration:2000
      });
      return;
    }

    // all field checked
    //POST api call for the product
    this._product.addProduct(this.product).subscribe(
      (data:any)=>{
        Swal.fire("Success",'Product added successfully','success')
        setTimeout(() => {
          this.router.navigate(['admin/productCRUD']);
        }, 500);
      },
      (error)=>{
        Swal.fire("Success",'Product added successfully','success')
        setTimeout(() => {
          this.router.navigate(['admin/productCRUD']);
        }, 500);
      }
    )

  }
}
