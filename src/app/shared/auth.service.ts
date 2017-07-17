import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  private authToken: any;
  private signedIn: Subject<boolean> = new Subject<boolean>();

  get signedInObservable(): Observable<boolean> {
      return this.signedIn.asObservable();
  }

  constructor (private _localStorageService: LocalStorageService) {
    this.signedIn.next(this.getTokenFromStorage() ? true : false);
  }

  isSignedIn(): boolean {
    return this.getToken() ? true : false;
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

  deleteToken(): void {
    this.authToken = null;
    this._localStorageService.remove('auth_token');
    this.signedIn.next(false);
  }
}
