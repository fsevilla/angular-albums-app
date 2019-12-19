import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  protected endpoint:string = '';

  constructor(private httpClient:HttpClient) { }

  getAll(userId?:number):Promise<any> {
    const qp = userId ? '?userId='+userId : '';
    const url = environment.apiUrl + this.endpoint + qp;
    return this.httpClient.get(url).toPromise();
  }

  getDetails(id:number):Promise<any> {
    const url = environment.apiUrl + this.endpoint + '/' + id;
    return this.httpClient.get(url).toPromise();
  }
}
