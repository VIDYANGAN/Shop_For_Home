import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  //basic pojo object of user
  user={
        "userId": 0,
        "userName": "",
        "password": "",
        "email": "",
        "phone": "",
        "userRole": "",
        "address":"",
        cart:[],
        wishlist:[]
  }

  constructor(private _user:UserService,  private _snack:MatSnackBar , private router: Router) { }

  ngOnInit(): void {
  }

  updateUserFormSubmit(){

    if(this.user.userId==0 || this.user.userId==null){
      this._snack.open("User Id Required !!",'',{
        duration:2000
      });
      return;
    } else if(this.user.userName.trim()=='' || this.user.userName==null){
      this._snack.open("username Required !!",'',{
        duration:2000
      });
      return;
    } else if(this.user.password.trim()=='' || this.user.password==null){
      this._snack.open("Password Required !!",'',{
        duration:2000
      });
      return;
    } else if(this.user.email.trim()=='' || this.user.email==null){
      this._snack.open("Email Required !!",'',{
        duration:2000
      });
      return;
    } else if(this.user.phone.trim()=='' || this.user.phone==null){
      this._snack.open("Phone Number Required !!",'',{
        duration:2000
      });
      return;
    } else if(this.user.userRole.trim()=='' || this.user.userRole==null){
      this._snack.open("User-Role Required !!",'',{
        duration:2000
      });
      return;
    }

    //all check
    this._user.updateUser(this.user).subscribe(
      (data:any)=>{
        //alert
        Swal.fire("Success",'User updated successfully','success')
        setTimeout(() => {
          this.router.navigate(['admin/userCRUD']);
        }, 500);
      },
      (error)=>{
        Swal.fire("Success",'Category updated successfully','success')
        setTimeout(() => {
          this.router.navigate(['admin/userCRUD']);
        }, 500);
      }
    )
  }
}
