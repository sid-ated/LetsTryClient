import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserWithId } from '../entity/UserWithId';
import { User } from '../entity/User';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({providedIn:'root'})
export class UserService {
 
  baseURL: string = "https://localhost:5001/";
 
  constructor(private http: HttpClient) {
  }
 
  getUsers(): Observable<UserWithId[]> {
    console.log('getUser '+this.baseURL + 'users')
    return this.http.get<UserWithId[]>(this.baseURL + 'users')
  }
 
  addUser(user:User): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(user);
    //console.log(body)
    return this.http.post(this.baseURL + 'register', body,{'headers':headers})
  }

  getUserById(id:string): Observable<UserWithId> {
    return this.http.get<UserWithId>(this.baseURL + 'users/' + id + '/view')
  }

  getUsersByName(FirstName:string, LastName: string): Observable<UserWithId[]>{
    return this.http.get<UserWithId[]>(this.baseURL + 'users/' + FirstName + '%' + LastName + '/query')
  }
 
}