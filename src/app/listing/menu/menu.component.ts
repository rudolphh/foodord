import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/_models/menuitem';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems : MenuItem [] = [];

  constructor(private menuService : MenuService) { }

  ngOnInit(): void {

    this.menuService.getAllMenuItems().subscribe(data => {console.log(data); this.menuItems = data});
  }

}
