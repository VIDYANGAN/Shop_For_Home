import { Component, OnInit } from '@angular/core';
import { SalesService } from 'src/app/services/sales.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  //basic sales pojo array
  sales=[
    {
      salesId:10,
      create_time:"2022-12-22",
      quantity:2,
      product:[{
        productId:0
      }]
    },
  ]

  constructor(private _sales:SalesService) { }

  ngOnInit(): void {

    //getting sales
    this._sales.Sales().subscribe((data:any)=>{
      //sales
      this.sales=data;
      console.log(data);

    },
    (error)=>{
      //
      console.log(error);
      Swal.fire("Error","error in loading data",'error');
    })
  }

}
