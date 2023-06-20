import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.component';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { ThrowStmt } from '@angular/compiler';
import { HomepageComponent } from '../homepage/homepage.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  user: User={"userId": 0,"userType": "", "userName":"", "userPassword":"", "userPhone": 0, "userEmail":"", "active": null, "roles": ""};
  invalidLogin = false;

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit(): void {
  }

  // Check user for authenticatoin
  checkLogin() {
    if(true){
      this.redirect();
    }
    else {
      console.log("Invalid Login Credentials..");
      this.invalidLogin = true;
    }
    // if(this.loginservice.authenticate(this.username, this.password)) {
    //   this.loginservice.getRole(this.username).subscribe((data: User)=> {
    //     this.user = data;
    //     this.redirect();
    //   });
    // }
    // else {
    //   console.log("Invalid Login Credentials..");
    //   this.invalidLogin = true;
    // }
  }

  // Redirect based on the user role
  redirect() {
    console.log(this.user);
    this.user.userType = 'citizen';
    if(this.user.userType === 'citizen') {
      sessionStorage.setItem('role', String(this.user.roles));
      sessionStorage.setItem('userId', String(this.user.userId));
      this.invalidLogin = false;
      this.router.navigate(["/userpanel"]).then(()=> {
        window.location.reload();
      });
    }
    else if(this.user.userType === 'citizen') {
      sessionStorage.setItem('role', 'admin');
      sessionStorage.setItem('userId', String(this.user.userId));
      this.invalidLogin = false;
      this.router.navigate(["/adminpanel"]).then(()=> {
        window.location.reload();
      });
    }
  }

}
