import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
handleLogout() {
throw new Error('Method not implemented.');
}
user: any;
adminRole: any;
handleHeaderRemove() {
throw new Error('Method not implemented.');
}
displayWelcomeHeader: any;

  constructor() { }

  ngOnInit(): void {
  }

}
