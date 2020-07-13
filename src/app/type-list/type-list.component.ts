import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.sass']
})
export class TypeListComponent implements OnInit {
  @Input() list: Array<string>;
  @Output() changed = new EventEmitter();
  model: any;
  throttling;
  constructor() { }

  ngOnInit(): void {
  }

  onNgModelChange(value) {
    clearTimeout(this.throttling);
    this.throttling = setTimeout(() => {
      this.changed.emit(value);
    });
  }
}
