import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class AuthService {

  constructor (
    private localStorageService: LocalStorageService
  ) { }

  setToken(token: string): void {
    this.localStorageService.set('auth_token', token);
  }
}
