import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  registrationUrl : string = "http://api.rudyah.com/api/v1/register";

  constructor(private http : HttpClient) { }

  register(user : User) : Observable<any>{
    return this.http.post(this.registrationUrl, user);
  }
}
