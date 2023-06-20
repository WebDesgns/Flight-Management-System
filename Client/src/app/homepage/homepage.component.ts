import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styles: [
    `
      .All {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
      }

      .top-left {
        position: absolute;
        top: 8px;
        left: 16px;
        margin-top: 60px;
        margin-left: 40px;
        color: white;
        text-shadow: 2px 2px 4px #000000;
        font-size: 60px;
        font-style: italic;
        font-weight: bold;
        font-family: 'Georgia', Times, serif;
      }

      .bottom-right {
        position: absolute;
        bottom: 8px;
        right: 16px;
        margin-bottom: 50px;
        margin-right: 40px;
        color: white;
        text-shadow: 2px 2px 4px #000000;
        font-size: 40px;
        font-style: italic;
        font-weight: bold;
        font-family: 'cursive';
      }

      .container {
        position: relative;
        margin-left: 40px;
        width: 80%;
      }
      .image1 {
        display: block;
        width: 80%;
        /*height: auto;*/
      }
      .overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #2874a6;
        overflow: hidden;
        width: 80%;
        height: 0;
        transition: 0.5s ease;
      }
      .container:hover .overlay {
        height: 100%;
      }
      .text {
        white-space: nowrap;
        color: white;
        font-size: 20px;
        font-family: 'Georgia', Times, serif;
        position: absolute;
        overflow: hidden;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
      }
      /*---------------------------------------------*/
      .container2 {
        position: relative;
        width: 80%;
      }

      .image2 {
        display: block;
        width: 80%;
        height: auto;
      }

      .overlay2 {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #2874a6;
        overflow: hidden;
        width: 0;
        height: 100%;
        transition: 0.5s ease;
      }

      .container2:hover .overlay2 {
        width: 80%;
      }
      .carousel-item img {
        height: 80vh;
        object-fit: cover;
      }
    `,
  ]
})
export class HomepageComponent implements OnInit {
  displayWelcomeHeader: boolean;
  loggedInUser: any;
handleLogout() {
localStorage.clear();
this.user.logoutUser();
this.router.navigate(['/login-page']);
}
user: any;
adminRole: any;
handleHeaderRemove() {
this.displayWelcomeHeader = false;
localStorage.setItem('displayWelcomeHeader', 'false');
}


  constructor(private authService: AuthenticationService , private router: Router) {
    this.user = this.authService.getRole(this.user);
    this.adminRole = this.authService.getRole(this.adminRole);
    this.displayWelcomeHeader = true;
  }


  ngOnInit(): void {
    if (localStorage.getItem('displayWelcomeHeader')) {
      this.displayWelcomeHeader = false;
    }
    this.user.getRole().subscribe((user:any) => {
      this.loggedInUser = user;
    },
    (err:any) => {
      console.log("Error in fetching user");
    });
  }

}
