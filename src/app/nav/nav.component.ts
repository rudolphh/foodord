import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { LocalStorageService } from '../services/local-storage.service';
import { LocalStorageChanges } from '../_models/localstoragechanges';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  localStorageChanges$ = this.localStorageService.changes$;
  currentUser : User = {};

  constructor(private localStorageService : LocalStorageService) { }

  ngOnInit(): void {
    this.localStorageChanges$.subscribe(data => {console.log(data); this.currentUser=(data as LocalStorageChanges).value as User})
  }

  logout() {
    this.localStorageService.remove('currentUser');
  }

}
