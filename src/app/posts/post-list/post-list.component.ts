import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostService } from './../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  postsList:Post[];

  settings = {
    columns: [
      { name: 'Titulo', property: 'title' },
      { name: 'Usuario', property: 'userId' }
    ],
    onRowClick: (row) => {
      this.selectPost(row);
    }
  }

  @Output() selected = new EventEmitter<Post>();

  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postService.getPosts()
      .then(response => {
        this.postsList = response;
      })
      .catch(err => {
        console.error(err);
      });
  }

  selectPost(post:Post) {
    this.selected.emit(post);
  }

}
