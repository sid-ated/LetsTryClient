import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserWithId } from '../entity/UserWithId';
import { User } from '../entity/User';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({providedIn:'root'})

export class KycService {
 
  baseURL: string = "https://localhost:5001/";
 
  constructor(private http: HttpClient) {
  }
 
  verifyKyc(user: User): Observable<any>{
    const headers = { 'content-type': 'application/json', responseType: 'text'}  
    const body=JSON.stringify(user);
    console.log(body)
    return this.http.post(this.baseURL + 'kycportal', body, {'headers':headers})
  }
  
}