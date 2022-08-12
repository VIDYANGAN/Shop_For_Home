import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-product-sidebar',
  templateUrl: './product-sidebar.component.html',
  styleUrls: ['./product-sidebar.component.css']
})
export class ProductSidebarComponent implements OnInit {

  categories:any;

  constructor(private _cat:CategoryService, private _snack:MatSnackBar) { }

  ngOnInit(): void {
    this._cat.categories().subscribe((data:any)=>{
      this.categories=data;
    },
    (error)=>{
      this._snack.open("Error in loading category",'',{
        duration:2000
      })
    })
  }

}
