import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Album } from './album';

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

  getAlbums():Promise<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/albums').toPromise();
  }

  getAlbumDetails(id:number):Promise<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/albums/'+id).toPromise();
  }
}
