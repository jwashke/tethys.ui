import { Component } from '@angular/core';

import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  signedIn: any;

  constructor(private _authService: AuthService) {
    this._authService.isSignedIn
      .subscribe(signedIn => this.signedIn = signedIn);
  }
}
