import { Injectable }     from '@angular/core';
import { CanActivate, Router }    from '@angular/router';

import { AuthService } from '../shared/auth.service';

@Injectable()
export class SignedOutGuard implements CanActivate {
  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  canActivate() {
    if (!this._authService.isSignedIn()) { return true }

    this._router.navigate(['/']);
    return false
  }
}
