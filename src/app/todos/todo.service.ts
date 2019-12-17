import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient:HttpClient) { }

  getTodos(userId?:number):Promise<any> {
    const qp = userId ? '?userId=' + userId : '';
    return this.httpClient.get(environment.apiUrl+'todos'+qp).toPromise();
  }

}
