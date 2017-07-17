import { Component, OnInit } from '@angular/core';

import { User } from '../models/';
import { SigninService, IAuthResponse } from './';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  user: User;

  constructor(private _signinService: SigninService) { }

  ngOnInit() {
      this.user = new User();
  }

  onSubmit(): void {
    this._signinService.signin(this.user)
      .subscribe(data => this.setAuthToken(data),
         error => console.log(error));
  }

  setAuthToken(response: IAuthResponse): void {
      console.log(response.auth_token);
  }

}
