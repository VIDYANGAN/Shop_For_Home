import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCRUDComponent implements OnInit {

  // Basic product pojo array
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

  constructor(private _product:ProductService) { }

  // GET api call for the users
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
  }

}
