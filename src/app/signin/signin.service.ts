import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { IUser, IAuthToken } from '../interfaces/';
import { apiUrl } from '../api_environment';

@Injectable()
export class SigninService {
  private _authUrl: string = apiUrl + '/api/v1/auth'

  constructor(private _http: Http) { }

  signin(user: IUser): Observable<IAuthToken> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(this._authUrl, { user: user }, options)
      .map((response: Response) => <any> response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    // need to log with api
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
