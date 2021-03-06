import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FriendsComponent } from './friends/friends.component';



@NgModule({
  declarations: [RestaurantsComponent, MenuComponent, HomeComponent, FriendsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class ListingModule { }
