import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [RestaurantsComponent, MenuComponent, HomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ListingModule { }
