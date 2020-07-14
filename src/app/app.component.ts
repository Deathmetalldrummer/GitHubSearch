import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import * as moment from 'moment';
import {BodyChange, SearchChange} from './store/action';
import {select, Store} from '@ngrx/store';
import {AppState} from './store/store';
import {selectSearch, selectSearchType} from './store/selectors';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
  title = 'GitHubFilter';
  searchValue;
  searchTypeValue;
  body;

  constructor(private appService: AppService, private store: Store<AppState>) {}
  ngOnInit() {
    this.store.pipe(select(selectSearch)).subscribe(data => {
      this.searchValue = data;
      this.getBody();
    });
    this.store.pipe(select(selectSearchType)).subscribe(data => {
      this.searchTypeValue = data;
      this.getBody();
    });
  }
  search(value?) {
    if (value) {
      this.store.dispatch(new SearchChange({q: value}));
    }
  }

  getBody() {
    if (this.searchValue && this.searchValue.q) {
      this.appService.search(this.searchValue, this.searchTypeValue).subscribe((data: any) => {
        let body = data.items;
        if (this.searchTypeValue === 'repositories') {
          body = data.items.map(item => {
            item.updated_at = moment(item.updated_at).format('DD MMM YYYY');
            return item;
          });
        }
        this.store.dispatch(new BodyChange(body));
      });
    }
  }
}
