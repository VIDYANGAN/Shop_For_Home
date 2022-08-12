import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
// import {User} from '../../User'
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService , private _snackBar:MatSnackBar , private router: Router) { }


  //binding data pojo
  public user={
    userName: '',
    password : '',
    email : '',
    phone : '',
    address:'abc',
    userRole:"USER"
  };

  ngOnInit(): void {}

  hide = true;
  res1:any

  snackBarAlert = (message:string)=>{
    this._snackBar.open(message,'Ok',
    {duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    })
    return;
  }

  CheckUser = async (user : object , res1:any) => {
    // let res1 = await fetch(`http://localhost:8555/user/getAll`, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });

    let result=true;
    // let userR = await res1.json();
    let userR=res1;

    userR.forEach((element:any) =>{
      if(element.userName == this.user.userName){
        // this.snackBarAlert('Username already exits');
        Swal.fire('Error','User already exits with this username','error');
        result=false;
      }else if(element.email == this.user.email){
        Swal.fire('Error','User already exits with this Email','error');
        result=false;
      }else if(element.phone == this.user.phone){
        Swal.fire('Error','User already exits with this phone number','error');
        result=false;
      }
    })
    
    if(result==true){
      this.userService.addUser(this.user).subscribe(
        (response: object)=>{
          console.log(response);
          Swal.fire('Successfully Done','User is registered','success');
          setTimeout(() => {
            this.router.navigate(['login']);
          }, 500);
        },
        (error:HttpErrorResponse)=>{
          Swal.fire('Successfully Done','User is registered','success');
          setTimeout(() => {
            this.router.navigate(['login']);
          }, 500);
          
        }
        )
      //   (data)=>{
      //     //success
      //     // console.log(data);
      //     // alert('Successfully Registered');
      //     Swal.fire('Successfully Done','User is registered','success');
      //     setTimeout(() => {
      //       this.router.navigate(['login']);
      //     }, 500);
      //   },
      //   (error)=> {
      //     //error
      //     console.log(error);
      //     // alert('Something went wrong');
      //     Swal.fire('Something went wrong','Fill the Fields properly and unique','error');
      //   }
      // );
    }
  }

  formSubmit(){
    // console.log(this.user);
    if(this.user.userName=='' || this.user.userName ==null){
      this.snackBarAlert('Username is required');
      return;
    }
    else if(this.user.password=='' || this.user.password ==null){
      this.snackBarAlert('Password is required');
      return;
    }else if(this.user.email=='' || this.user.email ==null){
      this.snackBarAlert('Email is required');
      return;
    }else if(this.user.phone=='' || this.user.phone ==null){
      this.snackBarAlert('Phone Number is required');
      return;
    }else{
      
            //fetching user
        this.userService.users().subscribe((data:any)=>{
          this.res1=data;
          console.log(this.res1 );
          //verying user function
          this.CheckUser(this.user , this.res1);
        },
        (error)=>{
          console.log(error);
          Swal.fire("Error","error in loading data",'error');
          
        })
    } 
    
    
    }
  
  }


  