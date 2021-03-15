import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackingComponent } from './tracking/tracking.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [TrackingComponent, CartComponent],
  imports: [
    CommonModule
  ]
})
export class OrderingModule { }
