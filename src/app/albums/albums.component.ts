import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AlbumService } from './album.service';
import { Album } from './album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  title:string = '';

  albumsList:Array<Album> = [];

  userId:number;

  settings = {
    columns: [
      { name: 'Usuario', property: 'userId' },
      { name: 'Titulo', property: 'title' }
    ],
    basePath: '',
    idField: 'id',
    rowActions: true
  };

  constructor(
    private albumService:AlbumService,
    private activatedRoute:ActivatedRoute
  ) {
    this.activatedRoute.parent.params.subscribe(params => {
      this.userId = params.id;
      if(this.userId) {
        this.settings.basePath = '/albums/';
      }
    })
  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.addAlbum();
    // },3000);
    this.albumService.getAlbums(this.userId)
      .then(response => {
        this.albumsList = response;
      })
      .catch(err => {
        console.log('Algo fallo');
      });
  }

  addAlbum(e?) {
    if((typeof e === 'undefined' || e.key === 'Enter') && this.title) {
      this.albumsList.push({title:this.title});
      this.title = '';
    }
  }

  cancelForm(e) {
    e.preventDefault();
  }

}

