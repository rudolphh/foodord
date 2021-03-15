import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { FriendService } from '../../services/friend.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends : User[] = [];

  constructor(private friendService : FriendService) { }

  ngOnInit(): void {
    this.friendService.getAllFriends().subscribe(data => {console.log(data); this.friends = data});
  }

}
