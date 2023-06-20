import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.component';
import {switchMap, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  users : User[];

  constructor(private httpClient: HttpClient) { }

  //Retrieves user token and checks authentication
  authenticate(username, password) {
    return true
    // return this.httpClient.post<any>('http://localhost:8080/authenticate', { username, password }).pipe(tap(userData => {
    //   sessionStorage.setItem('username', username);
    //   let tokenStr = 'Bearer' + userData.token;
    //   sessionStorage.setItem('token', tokenStr);
    //   })
    // );
  }

  // Checks whether the user is logged in
  isUserLoggedIn():boolean {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }

  // Removes user session(logout)
  logOut() {
    sessionStorage.removeItem('username');
  }

  // //log in
  // longIn(userId: number){
  //   return this.httpClient.get('http://localhost:8080/login/' + userId);
  // }

  // Retrives role of user(customer/admin)
  getRole(username:String) {
    return this.httpClient.get('http://localhost:8080/getRole?username='+ username);
  }

  // Adds a new User
  signUp(user: User) {
    this.httpClient.post<User>('http://localhost:8080/signup', user);
    }
  }
  //.pipe(switchMap(() => this.authenticate(user.userName, user.userPassword)))ś