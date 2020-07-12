import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  search: string;
  throttling;
  constructor() { }
  @Output() searchChanged = new EventEmitter();

  ngOnInit(): void {

  }

  searching() {
    clearTimeout(this.throttling);
    this.throttling = setTimeout(() => {
      console.log('throttling', true);
      this.searchChanged.emit(this.search);
    }, 500);
  }
}
