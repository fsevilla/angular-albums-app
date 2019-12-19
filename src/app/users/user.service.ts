import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { CrudService } from '../common/services/crud.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudService {

  endpoint = 'users';

}
