import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {

  // basic user pojo
  user={
    userId:0
  }

  constructor(private _user:UserService , private _snack:MatSnackBar, private router:Router) { }

  ngOnInit(): void {
  } 

  //delete method for user
  deleteUserFormSubmit(){
    if(this.user.userId==0 || this.user.userId==null){
      this._snack.open("User Id Required !!",'',{
        duration:2000
      });
      return;
    }

    //all check
    //DELETE api call
    this._user.deleteUser(this.user.userId).subscribe(
      (data:any)=>{
        Swal.fire("Success",'User Deleted successfully','success')
        setTimeout(() => {
          this.router.navigate(['admin/userCRUD']);
        }, 500);
      },
      (error)=>{
        Swal.fire("Success",'User Deleted successfully','success')
        setTimeout(() => {
          this.router.navigate(['admin/userCRUD']);
        }, 500);
      }
    )
  }
}
