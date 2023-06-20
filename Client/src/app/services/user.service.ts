import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { User } from '../model/user.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users : User[];

  private baseUrl='http://localhost:8080/user';
  constructor(private http: HttpClient) { }

  createUser(user: object): Observable<Object>{
    return this.http.post(`${this.baseUrl}/createUser`, user);
  }

  updateUser(user: object): Observable<Object>{
    return this.http.put(`${this.baseUrl}/updateUser/`, user);
  }

  deleteUser(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/deleteUser/${id}`,{ responseType: 'text'});
  }

  getUser(userId: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/searchUser/${userId}`);
  }

  getUserList(): Observable<any>{
    return this.http.get(`${this.baseUrl}/readAllUsers`)
  }
}
