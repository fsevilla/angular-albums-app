import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css']
})
export class DatalistComponent implements OnInit, OnChanges {

  @Input() data:any[];
  @Input() settings:any;

  originalData:any[];
  filteredData:any[];

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes) {
    if(changes.data) {
      this.originalData = this.data ? this.data.slice(0) : [];
      this.filteredData = this.originalData.slice(0);
    }
  }

  isBoolean(value) {
    return typeof value === 'boolean';
  }

  hasActions() {
    return typeof this.settings.rowActions !== 'undefined';
  }

  getDetailsPath(row) {
    const basePath = this.settings.basePath || '';
    return basePath + row[this.settings.idField];
  }

  filter(value) {
    this.filteredData = this.originalData.filter(row => {
      let flag = false;

      this.settings.columns.map(col => {
        const colValue = col.property ? row[col.property].toString() : col.prep(row).toString();
        if(colValue.includes(value)) {
          flag = true;
        }
      });

      return flag;
    });
  }

}
