import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  //sample pojo object
  category={
    categoryName:'',
    categoryDesc:'',
  }

  constructor( private _category:CategoryService , private _snack:MatSnackBar , private router: Router) { }

  ngOnInit(): void {
  }

  //add category method
  addCategoryFormSubmit(){
    if(this.category.categoryName.trim()=='' || this.category.categoryName==null){
      this._snack.open("Title Required !!",'',{
        duration:2000
      });
      return;
    } else if(this.category.categoryDesc.trim()=='' || this.category.categoryDesc==null){
      this._snack.open("Description Required !!",'',{
        duration:2000
      });
      return;
    }

    //all check
    //Post API call goes here
    this._category.addCategory(this.category).subscribe(
      (data:any)=>{

        //clearing localstorage data:
        this.category.categoryName=''
        this.category.categoryDesc=''
        //alert
        Swal.fire("Success",'Category added successfully','success')
        setTimeout(() => {
          this.router.navigate(['admin/categoryCRUD']);
        }, 500);
      },
      (error)=>{
        Swal.fire("Success",'Category added successfully','success')
        setTimeout(() => {
          this.router.navigate(['admin/categoryCRUD']);
        }, 500);
      }
    )
  }
}
