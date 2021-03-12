import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [RestaurantsComponent, MenuComponent, SearchComponent],
  imports: [
    CommonModule
  ]
})
export class ListingModule { }
