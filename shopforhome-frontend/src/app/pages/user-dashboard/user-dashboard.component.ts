import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(public loginF : LoginService , private router:Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/user/all']);
    }, 500);
  }

}
