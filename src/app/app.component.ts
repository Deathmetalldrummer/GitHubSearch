import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSelectionListChange} from '@angular/material/list';

interface Repo {
  full_name: string;
  description: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
  title = 'GitHubFilter';
  value;
  searchResult: Array<Repo>;
  searchType: string[] = ['Repositories', 'Code', 'Commits', 'Packages', 'Users'];
  api = 'https://api.github.com/search/';
  displayedColumns: string[] = ['full_name', 'description'];
  dataSource = new MatTableDataSource(this.searchResult);
  @ViewChild(MatPaginator) set matPaginator( paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
  }
  @ViewChild(MatSort) set matSort( sort: MatSort) {
    this.dataSource.sort = sort;
  }

  constructor(private http: HttpClient) {}
  ngOnInit() {
  }
  search(value) {
    console.log(value);
    this.http.get(this.api + 'repositories', {params: {q: value, p: '3'}}).subscribe((data: any) => {
      console.log(data);
      this.searchResult = data.items;
      this.dataSource.data = data.items;
    });
  }
}
