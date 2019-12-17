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

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .then(response => {
        this.usersList = response;
      })
      .catch(err => {
        console.error(err);
      });
  }

}
