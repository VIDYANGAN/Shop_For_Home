import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deletecategory',
  templateUrl: './deletecategory.component.html',
  styleUrls: ['./deletecategory.component.css']
})
export class DeletecategoryComponent implements OnInit {

  category={
    categoryId: 0
  }

  constructor(private _category:CategoryService , private _snack:MatSnackBar, private router:Router) { }

  ngOnInit(): void {
  }

  // delete product method goes here
  deleteProductFormSubmit(){
    if(this.category.categoryId==0 || this.category.categoryId==null){
      this._snack.open("Category Id Required !!",'',{
        duration:2000
      });
      return;
    }

    //all check
    // delete API call goes here
    this._category.deleteCategory(this.category.categoryId).subscribe(
      (data:any)=>{
        Swal.fire("Success",'Category Deleted successfully','success')
        setTimeout(() => {
          this.router.navigate(['admin/categoryCRUD']);
        }, 500);
      },
      (error)=>{
        Swal.fire("Success",'Category Deleted successfully','success')
        setTimeout(() => {
          this.router.navigate(['admin/categoryCRUD']);
        }, 500);
        
      }
    )
  }
}
