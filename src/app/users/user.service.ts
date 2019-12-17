import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getUsers():Promise<any> {
    return this.httpClient.get(environment.apiUrl+'users').toPromise();
  }

  getUserDetails(id:number):Promise<any> {
    return this.httpClient.get(`${environment.apiUrl}users/${id}`).toPromise();
  }

}
