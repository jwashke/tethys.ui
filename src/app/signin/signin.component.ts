import { Component, OnInit, ViewChild } from '@angular/core';

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
  @ViewChild('signinForm') private signinForm;
  user: User;
  errorMessage: string;

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
         error => this.handleError(error));
  }

  setAuthToken(token: IAuthToken): void {
      this._authService.setToken(token.auth_token);
  }

  handleError(error: any): void {
      this.errorMessage = error;
      this.signinForm.resetForm();
  }
}
