import { UserService } from './user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from './menu.service';
import { LocalStorageService } from './local-storage.service';
import { StorageService } from './storage.service';
import { FriendService } from './friend.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    UserService,
    MenuService,
    StorageService,
    FriendService
  ]
})
export class ServicesModule { }
