import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }

  getPosts():Promise<any> {
    return this.httpClient.get(environment.apiUrl+'posts').toPromise();
  }
}
