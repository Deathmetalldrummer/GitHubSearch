import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const API = 'https://api.github.com/search/';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  search(params, type = 'repositories') {
    return this.http.get(API + type, {params});
  }

}
