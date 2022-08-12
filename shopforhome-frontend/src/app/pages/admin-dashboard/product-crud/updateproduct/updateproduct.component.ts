import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  product={
        productId: 0,
        productName: "",
        productDescription: "",
        productprice: 0,
        productStock: 0,
        productImg: ""
  }

  constructor(private _product:ProductService,  private _snack:MatSnackBar , private router: Router) { }

  ngOnInit(): void {
  }

  // update product method goes here 
  updateProductFormSubmit(){

    if(this.product.productId==0 || this.product.productId==null){
      this._snack.open("Product Id Required !!",'',{
        duration:2000
      });
      return;
    } else if(this.product.productName.trim()=='' || this.product.productName==null){
      this._snack.open("Product Title Required !!",'',{
        duration:2000
      });
      return;
    } else if(this.product.productDescription.trim()=='' || this.product.productDescription==null){
      this._snack.open("Category Description Required !!",'',{
        duration:2000
      });
      return;
    } else if(this.product.productprice==0 || this.product.productprice==null){
      this._snack.open("Product Price Required !!",'',{
        duration:2000
      });
      return;
    } else if(this.product.productStock==0 || this.product.productStock==null){
      this._snack.open("Product Stock Required !!",'',{
        duration:2000
      });
      return;
    }else if(this.product.productImg.trim()=='' || this.product.productImg==null){
      this._snack.open("Product Image URL Required !!",'',{
        duration:2000
      });
      return;
    }

    //all condition check for fields
    // PUT api call for the product
    this._product.updateProduct(this.product).subscribe(
      (data:any)=>{
        //alert
        Swal.fire("Success",'Product updated successfully','success')
        setTimeout(() => {
          this.router.navigate(['admin/productCRUD']);
        }, 500);
      },
      (error)=>{
        Swal.fire("Success",'Category updated successfully','success')
        setTimeout(() => {
          this.router.navigate(['admin/productCRUD']);
        }, 500);
      }
    )
  }
}
