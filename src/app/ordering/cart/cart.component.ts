import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../_models/menuitem';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems : MenuItem[] = [];

  constructor(
    private cartService : CartService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  get total(){
    return this.cartService.getTotalCost();
  }

  placeOrder(){

    this.router.navigate(['tracking']);
  }

}
