import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  // basic user pojo class
  user={
        userName: "",
        password: "",
        email: "",
        phone: "",
        address:"abc",
        userRole:"USER",
        cart:[],
        wishlist:[]
  }

  constructor(private _user:UserService , private _snack:MatSnackBar , private router: Router) { }

  ngOnInit(): void {
  }

  // Add user method 
  addUserFormSubmit(){
   if(this.user.userName.trim()=='' || this.user.userName==null){
      this._snack.open("Username Required !!",'',{
        duration:2000
      });
      return;
    } else if(this.user.password.trim()=='' || this.user.password==null){
      this._snack.open("User Password Required !!",'',{
        duration:2000
      });
      return;
    } else if(this.user.email.trim()=='' || this.user.email==null){
      this._snack.open("User Email Required !!",'',{
        duration:2000
      });
      return;
    }  else if(this.user.phone.trim()=='' || this.user.phone==null){
      this._snack.open("User Phone Number Required !!",'',{
        duration:2000
      });
      return;
    }

    //all check
    // POST api call for user
    this._user.addUser(this.user).subscribe(
      (data:any)=>{

        //alert
        Swal.fire("Success",'User added successfully','success')
        setTimeout(() => {
          this.router.navigate(['admin/userCRUD']);
        }, 500);
      },
      (error)=>{
        // Swal.fire("Success",'User added successfully','success')
        // setTimeout(() => {
        //   this.router.navigate(['admin/userCRUD']);
        // }, 500);
      }
    )
  }
}
