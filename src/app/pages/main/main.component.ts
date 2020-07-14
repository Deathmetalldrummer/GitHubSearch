import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {SearchTypeChange} from '../../store/action';
import {AppState} from '../../store/store';
import {selectBody, selectSearchType} from '../../store/selectors';
import {Router} from '@angular/router';
import {AppService} from '../../app.service';
import {headersParams} from '../../shared/helpers/constants';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  searchType: string[] = ['Repositories', 'Users'];
  searchTypeValue;
  headers;
  headersKeys;
  body;
  constructor(private store: Store<AppState>, private router: Router, private appService: AppService) { }

  ngOnInit(): void {
    this.body = this.store.pipe(select(selectBody));
    this.store.pipe(select(selectSearchType)).subscribe(data => {
      this.searchTypeValue = data;
      this.headers = headersParams[data].cols;
      this.headersKeys = headersParams[data].keys;
    });
  }
  typeListChanged(value: Array<string>) {
    this.store.dispatch(new SearchTypeChange(value[0].toLowerCase()));
  }

  onRow(value) {
    if (this.searchTypeValue === 'repositories') {
      this.router.navigate(['repository', value.owner.login, value.name]);
    }
    if (this.searchTypeValue === 'users') {
      this.router.navigate(['user', value.login]);
    }
  }
}
