import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Album } from './album';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  albums:Array<Album> = [
    {title:'album 1'},
    {title:'album 2'},
    { title: 'album 3'}
  ];

  constructor(private httpClient:HttpClient) { }

  getAlbumsStatic():Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.albums);
      }, 3000);
    });
  }

  getAlbums(userId?:number):Promise<any> {
    const qp = userId ? '?userId='+userId : '';
    return this.httpClient.get(environment.apiUrl + 'albums' + qp).toPromise();
  }

  getAlbumDetails(id:number):Promise<any> {
    return this.httpClient.get(environment.apiUrl+'albums/'+id).toPromise();

    // return new Promise((resolve, reject) => {
    //   this.httpClient.get(environment.apiUrl+'albums/'+id).toPromise().then(response => {
    //     setTimeout(() => {
    //       resolve(response);
    //     }, 2000);
    //   });
    // });
  }
}
