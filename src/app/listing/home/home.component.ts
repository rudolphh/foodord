import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public searchForm !: FormGroup;

  constructor(private fb : FormBuilder, private router : Router) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      restaurant: ['']
    });
  }

  onSubmit(){
    this.router.navigate(['/restaurants']);
  }


}
