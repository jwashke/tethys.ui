import { Component, OnInit } from '@angular/core';

import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.scss']
})
export class SignoutComponent implements OnInit {

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this._authService.deleteToken();
  }
}
