import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const API = 'https://api.github.com/search/';
const REPO = 'https://api.github.com/repos/';
const USER = 'https://api.github.com/users/';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  search(params, type = 'repositories') {
    return this.http.get(API + type, {params});
  }
  getRepo(owner, repo) {
    return this.http.get(REPO + owner + '/' + repo);
  }
  getFromUrl(url) {
    return this.http.get(url);
  }
  getUser(id) {
    return this.http.get(USER + id);
  }
}
