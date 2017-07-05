import { Component, OnInit } from '@angular/core';

import { User } from '../models/';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  user: User;

  constructor() { }

  ngOnInit() {
      this.user = new User();
  }

  onSubmit(): void {
    console.log(this.user);
  }

}
