import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent implements OnInit {

  category={
    categoryId:0,
    categoryName:'',
    categoryDesc:''
  }

  constructor( private _category:CategoryService , private _snack:MatSnackBar , private router: Router) { }

  ngOnInit(): void {
  }

  // update category method goes here
  updateCategoryFormSubmit(){

    if(this.category.categoryId==0 || this.category.categoryId==null){
      this._snack.open("Category Id Required !!",'',{
        duration:2000
      });
      return;
    } else if(this.category.categoryName.trim()=='' || this.category.categoryName==null){
      this._snack.open("Category Title Required !!",'',{
        duration:2000
      });
      return;
    } else if(this.category.categoryDesc.trim()=='' || this.category.categoryDesc==null){
      this._snack.open("Category Description Required !!",'',{
        duration:2000
      });
      return;
    }

    //all check
    //PUT api call goes here
    this._category.updateCategory(this.category).subscribe(
      (data:any)=>{

        //clearing localstorage data:
        this.category.categoryName=''
        this.category.categoryDesc=''
        //alert
        Swal.fire("Success",'Category updated successfully','success')
        setTimeout(() => {
          this.router.navigate(['admin/categoryCRUD']);
        }, 500);
      },
      (error)=>{
        Swal.fire("Success",'Category updated successfully','success')
        setTimeout(() => {
          this.router.navigate(['admin/categoryCRUD']);
        }, 500);
      }
    )
  }
}
