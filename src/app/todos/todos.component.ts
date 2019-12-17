import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TodoService } from './todo.service';
import { Todo } from './todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todosList:Todo[];
  userId:number;

  constructor(
    private todoService:TodoService,
    private activatedRoute:ActivatedRoute
  ) {
    this.activatedRoute.parent.params.subscribe(params => {
      this.userId = params.id;
    })
  }

  ngOnInit() {
    this.todoService.getTodos(this.userId)
      .then(response => {
        this.todosList = response;
      })
      .catch(err => {
        console.error(err);
      });
  }

}
