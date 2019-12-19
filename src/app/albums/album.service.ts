import { Injectable } from '@angular/core';

import { Album } from './album';
import { CrudService } from '../common/services/crud.service';


@Injectable({
  providedIn: 'root'
})
export class AlbumService extends CrudService {

  endpoint = 'albums';

  getAlbums(userId) {
    return super.getAll(userId);
  }
  
}
