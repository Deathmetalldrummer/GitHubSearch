import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import * as moment from 'moment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
  title = 'GitHubFilter';

  searchType: string[] = ['Repositories', 'Users'];
  searchTypeValue: string = this.searchType[0].toLowerCase();

  headers;
  headersKeys;
  body;
  headersParams = {
    repositories: {
      cols: [['full_name', 'Name'], ['description', 'Description'], ['stargazers_count', 'Stars'],
            ['language', 'Language'], ['updated_at', 'Last Update']],
      keys: ['full_name', 'description', 'stargazers_count', 'language', 'updated_at']
    },
    users: {
      cols: [['login', 'Login']],
      keys: ['login']
    }
  };
  private queryParams: any;

  constructor(private appService: AppService) {}
  ngOnInit() {
  }
  search(value?) {
    this.queryParams = {q: value};
    this.getBody();
  }

  typeListChanged(value: Array<string>) {
    this.searchTypeValue = value[0].toLowerCase();
    this.getBody();
  }

  getBody() {
    if (this.queryParams && this.queryParams.q) {
      this.appService.search(this.queryParams, this.searchTypeValue).subscribe((data: any) => {
        console.log(data);
        this.body = data.items;
        if (this.searchTypeValue === 'repositories') {
          this.body = this.body.map(item => {
            item.updated_at = moment(item.updated_at).format('DD MMM YYYY');
            return item;
          });
        }
        this.headers = this.headersParams[this.searchTypeValue].cols;
        this.headersKeys = this.headersParams[this.searchTypeValue].keys;
      });
    }
  }
}
