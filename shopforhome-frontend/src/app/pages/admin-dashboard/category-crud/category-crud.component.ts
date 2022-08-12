import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-crud',
  templateUrl: './category-crud.component.html',
  styleUrls: ['./category-crud.component.css']
})
export class CategoryCRUDComponent implements OnInit {

  // category pojo object
  categories=[
    {
      categoryId: 64,
      categoryName: "Chair",
      categoryDesc: "All types of chairs",
      product: []
    }
  ]
  constructor(private _category:CategoryService ) { }

  //GET api call goes here
  ngOnInit(): void {
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
  }

}
