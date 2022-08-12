import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/services/user.service';
// import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    userName: '',
    password: '',
  };
  
  res1:any
  status : number = 0;
  uId : number = 0;
  uRole : string = "USER";
  uLoggedIn : boolean = false;
  uCart:any=[]
  uWish:any=[]
  constructor(private _snackBar:MatSnackBar , private loginService:LoginService , private router: Router , private userService:UserService ) { }

  ngOnInit(): void {
  }

  hide = true;

  snackBarAlert = (message:string)=>{
    this._snackBar.open(message,'Ok',
    {duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    })
    return;
  }

  

  CheckForUser = async (loginData : any , res1:any) => {
    // let res1 = await fetch(`http://localhost:8555/user/getAll`, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });

    let result=false;
    // let userR = await res1.json();
    let userR =  res1;

    userR.forEach((element:any) =>{
        if(element.userName === loginData.userName){
              result=true;
              if(element.password === loginData.password){

                  console.log("logged-in successfully");   
                  this.uId=element.userId; 
                  this.uRole=element.userRole;
                  this.uCart=element.cart;
                  this.uWish=element.wishlist;
                  this.loginService.setUserId(this.uId);
                  this.loginService.setUser(element);
                  this.loginService.setUserRole(this.uRole);
                  this.loginService.setCart(this.uCart);
                  this.loginService.setWish(this.uWish);
                  // this.loginService.getUser();
              
                        //redirect ADMIN --> admin-dashboard
                        if(element.userRole=='ADMIN'){
                          Swal.fire('Success','Logged In successfully','success');
                          setTimeout(() => {
                            this.router.navigate(['admin']);
                          }, 500);

                          return;

                        }
                        //redirect user --> user-dashboard
                        else if(element.userRole=='USER'){
                          Swal.fire('Success','Logged In successfully','success');
                          setTimeout(() => {
                            this.router.navigate(['user']);
                          }, 500);
                          return;
                        }
              
              }else{
                this.snackBarAlert('Invalid Details');
              }
      }
      if(result==false){
        // this.snackBarAlert('User not found !!');
      }
     
    });
  }

  loginFormSubmit(){
    // console.log("login form click");

    if(this.loginData.userName.trim()=='' || this.loginData.userName ==null){
      this.snackBarAlert('Username is required');
      return;
    }
    else if(this.loginData.password.trim()=='' || this.loginData.password ==null){
      this.snackBarAlert('Password is required');
      return;
    }else{

      //fetching user
      this.userService.users().subscribe((data:any)=>{
        this.res1=data;
        console.log(this.res1);
        //verying user function
        this.CheckForUser(this.loginData , this.res1);
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error","error in loading data",'error');
        
      })

      //verying user function
      // this.CheckForUser(this.loginData , this.res1);
    }

    
  }

}
