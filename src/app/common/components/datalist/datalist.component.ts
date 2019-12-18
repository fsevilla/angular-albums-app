import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css']
})
export class DatalistComponent implements OnInit {

  @Input() data:any[];
  @Input() settings:any;

  constructor() { }

  ngOnInit() {
  }

  isBoolean(value) {
    return typeof value === 'boolean';
  }

}
