import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class AuthService {
  private auth_token: any;

  constructor (
    private _localStorageService: LocalStorageService
  ) { }

  setToken(token: string): void {
    this._localStorageService.set('auth_token', token);
    this.auth_token = token;
  }

  getToken(): string {
    return this.auth_token ? this.auth_token : this.getTokenFromStorage();
  }

  getTokenFromStorage(): string {
    if (this._localStorageService.get('auth_token')) {
      this.auth_token = this._localStorageService.get('auth_token');
      return this.auth_token
    } else
      return undefined;
  }
}
