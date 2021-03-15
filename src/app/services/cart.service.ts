import { Injectable } from '@angular/core';
import { MenuItem } from '../_models/menuitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  menuItems : MenuItem [] = [];

  constructor() { }

  getCartItems() : MenuItem[] {
    return this.menuItems;
  }

  addCartItem(menuItem : MenuItem) {
    this.menuItems.push(menuItem);
  }

  getTotalCost() : number {
    let total : number = 0;
    for(let item of this.menuItems){
      total += +item.cost!;
    }
    return total;
  }

}
