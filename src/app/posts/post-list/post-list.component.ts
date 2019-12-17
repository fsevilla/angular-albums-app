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
    console.log('Seleccionado: ', post);
  }

}
