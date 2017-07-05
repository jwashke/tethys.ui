import { Component, OnInit } from '@angular/core';

import { User } from '../models/';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  user: User;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
      this.user = new User();
  }

  onSubmit(): void {
    console.log(this.user);
    this._authService.login(this.user)
      .subscribe(data => console.log(data),
         error => console.log(error));
  }

}
