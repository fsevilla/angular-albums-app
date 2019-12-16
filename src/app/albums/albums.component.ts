import { Component, OnInit, AfterViewInit } from '@angular/core';
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

  constructor(
    private albumService:AlbumService
  ) {
    console.log('Album Service: ', this.albumService);
  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.addAlbum();
    // },3000);
    this.albumService.getAlbums()
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

