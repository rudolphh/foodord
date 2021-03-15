import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from '../_models/menuitem';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  friendsUrl : string = "http://api.rudyah.com/api/v1/friends";

  constructor(private http : HttpClient) { }

  getAllFriends() : Observable<User[]>{

    return this.http.get<User[]>(this.friendsUrl);

  }
}
