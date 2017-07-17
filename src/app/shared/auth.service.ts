import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {
  private authToken: any;
  private signedIn: Subject<boolean> = new Subject<boolean>();

  get isSignedIn() {
      return this.signedIn.asObservable();
  }

  constructor (private _localStorageService: LocalStorageService) {
    this.signedIn.next(this.getTokenFromStorage() ? true : false);
  }

  setToken(token: string): void {
    this._localStorageService.set('auth_token', token);
    this.authToken = token;
    this.signedIn.next(true);
  }

  getToken(): string {
    return this.authToken ? this.authToken : this.getTokenFromStorage();
  }

  getTokenFromStorage(): string {
    this.authToken = this._localStorageService.get('auth_token');
    return this.authToken;
  }
}
