import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {

  product={
    productId: 0
  }

  constructor(private _product:ProductService , private _snack:MatSnackBar, private router:Router) { }

  ngOnInit(): void {
  }

  // product delete method
  deleteProductFormSubmit(){
    if(this.product.productId==0 || this.product.productId==null){
      this._snack.open("Product Id Required !!",'',{
        duration:2000
      });
      return;
    }

    //all check
    // DELETE api call 
    this._product.deleteProduct(this.product.productId).subscribe(
      (data:any)=>{
        Swal.fire("Success",'Product Deleted successfully','success')
        setTimeout(() => {
          this.router.navigate(['admin/productCRUD']);
        }, 500);
      },
      (error)=>{
        Swal.fire("Success",'Product Deleted successfully','success')
        setTimeout(() => {
          this.router.navigate(['admin/productCRUD']);
        }, 500);
        
      }
    )
  }
}
