import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

interface Repo {
  full_name: string;
  description: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {
  @Output() row = new EventEmitter();
  private bodyVal;
  @Input()
    set body(value: any) {
      this.bodyVal = value;
      this.dataSource.data = value;
    }
    get body(): any { return this.bodyVal; }
  @Input() headers;
  @Input() headersKeys;

  dataSource = new MatTableDataSource(this.body);

  @ViewChild(MatPaginator) set matPaginator( paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
  }
  @ViewChild(MatSort) set matSort( sort: MatSort) {
    this.dataSource.sort = sort;
  }
  constructor() {}

  ngOnInit(): void {}

}
