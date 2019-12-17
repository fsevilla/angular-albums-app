import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  @Input() item;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('New selected post', this.item);
  }

}
