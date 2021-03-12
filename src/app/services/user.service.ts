import { User } from '../_models/user';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  registrationUrl : string = "http://api.rudyah.com/api/v1/register";

  constructor(private http : HttpClient) { }

  register(user : User) : Observable<any>{
    console.log(user.email);
    const body = new HttpParams()
    .set('name', user.name!)
    .set('email', user.email!)
    .set('password', user.password!)
    .set('password_confirmation', user.password_confirmation!);

    return this.http.post(this.registrationUrl,
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );

  }
}
