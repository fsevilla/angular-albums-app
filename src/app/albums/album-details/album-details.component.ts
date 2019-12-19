import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AlbumService } from '../album.service';
import { Album } from '../album';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  albumId:number;
  album:Album;

  isLoading:boolean;

  constructor(
    private activatedRoute:ActivatedRoute,
    private albumService:AlbumService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.albumId = params.id;
      this.getDetails();
    });
  }

  ngOnInit() {
  }

  getDetails() {
    this.isLoading = true;
    this.albumService.getDetails(this.albumId)
      .then(response => {
        console.log('Respuesta:', response);
        this.album = response;
        this.isLoading = false;
      })
      .catch(err => {
        console.error(err);
        this.isLoading = false;
      });
  }

}
