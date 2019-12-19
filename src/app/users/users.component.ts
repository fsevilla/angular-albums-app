import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersList:Array<User>;

  settings = {
    columns: [
      { name: 'Nombre', property: 'name' },
      { name: 'Email', property: 'email' }
    ],
    idField: 'id',
    rowActions: true
  }

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getAll()
      .then(response => {
        this.usersList = response;
      })
      .catch(err => {
        console.error(err);
      });
  }

}
