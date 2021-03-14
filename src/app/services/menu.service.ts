import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from '../_models/menuitem';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuItemsUrl : string = "http://api.rudyah.com/api/v1/feed";
  menuItems : MenuItem [] = [];

  constructor(private http : HttpClient) { }

  getAllMenuItems() : Observable<MenuItem[]>{

    return this.http.get<MenuItem[]>(this.menuItemsUrl);

  }
}
