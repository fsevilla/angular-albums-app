import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userId:number;
  user:User;

  currentTab:string = 'albums';

  constructor(
    private userService:UserService,
    private activatedRoute:ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params.id;
      this.getDetails();
    });
  }

  ngOnInit() {
  }

  getDetails() {
    this.userService.getDetails(this.userId)
      .then(response => {
        this.user = response;
      })
      .catch(err => {
        console.error(err);
      });
  }

  setCurrentTab(tabName:string) {
    this.currentTab = tabName;
  }

}
