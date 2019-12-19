import { Injectable } from '@angular/core';
import { CrudService } from '../common/services/crud.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService extends CrudService {

  endpoint = 'todos';

}
