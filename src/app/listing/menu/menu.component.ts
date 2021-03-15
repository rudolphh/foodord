import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/_models/menuitem';
import { MenuService } from '../../services/menu.service';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems : MenuItem [] = [];

  itemSelected !: MenuItem;
  itemDescription : string = "";

  constructor(
    private menuService : MenuService,
    private router : Router,
    private cartService : CartService
    ) { }

  ngOnInit(): void {

    this.menuService.getAllMenuItems().subscribe(data => {console.log(data); this.menuItems = data});

  }

  menuItemSelected(menuItem : MenuItem, itemDescription : string){
    this.itemSelected = menuItem;
    this.itemDescription = itemDescription;
  }

  addToCart() {
    // do something to add to cart list
    this.cartService.addCartItem(this.itemSelected);
    //this.router.navigate(['cart'])
  }

}
