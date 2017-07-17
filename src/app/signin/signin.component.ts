import { Component, OnInit } from '@angular/core';

import { User } from '../models/';
import { IAuthToken } from '../interfaces/';
import { SigninService } from './';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  user: User;

  constructor(
    private _signinService: SigninService,
    private _authService: AuthService
  ) { }

  ngOnInit() {
      this.user = new User();
  }

  onSubmit(): void {
    this._signinService.signin(this.user)
      .subscribe(data => this.setAuthToken(data),
         error => console.log(error));
  }

  setAuthToken(token: IAuthToken): void {
      this._authService.setToken(token.auth_token);
  }

}
